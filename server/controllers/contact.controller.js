import Contact from '../mongodb/models/contact';
import Prospect from '../mongodb/models/prospect.js';
import User from '../mongodb/models/user.js';

import mongoose from "mongoose";

const getAllContacts = async (req, res) => {
    const { 
        _end, 
        _order, 
        _start, 
        _sort, 
        name_like = "", 
        organization = ""
    } = req.query;

    const query = {};

    if(organization != ''){
        query.organization = organization;
    }

    if(name_like != ''){
        query.name = { $regex: name_like, $options: "i" };
    }

    try {
        const count = await Contact.countDocuments({ query });

        const contacts = await Contact
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order });

            res.header('x-total-count', count);
            res.header('Access-Control-Expose-Headers', 'x-total-count');



        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getContact = async (req, res) => {
    const { id } = req.params;
    const contactExists = await Contact.findOne({ _id: id }).populate('creator');

    if(contactExists) {
        res.status(200).json(contactExists);
    } else {
        res.status(404).json({ message: "Contact not found" });
    };
};

const createContact = async (req, res) => {
    try {
        const {
            name,
            organization,
            position,
            email,
            phone,
            linkedin,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found");

        const newContact = await Contact.create({
            name,
            organization,
            position,
            email,
            phone,
            linkedin,
            creator: user._id,
        });

        user.allContacts.push(newContact._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Contact created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            name,
            organization,
            position,
            email,
            phone,
            linkedin,
         } = req.body;

         await Contact.findByIdAndUpdate(
            {_id: id },
            {
                name,
                organization,
                position,
                email,
                phone,
                linkedin,
            },
         );

         res.status(200).json({ message: "Contact updated successfully" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletContact = async (req, res) => {
    try {
        const { id } = req.params;

        const contactToDelete = await Contact.findById({ _id: id }).populate('creator');

        const session = await mongoose.startSession();
        session.startTransaction();

        contactToDelete.remove({ session });
        contactToDelete.creator.allContacts.pull(contactToDelete);

        await contactToDelete.creator.save({ session });
        await session.commitTransaction();

        res.status(200).json({ message: "Contact deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deletContact,
}