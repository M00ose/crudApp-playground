import Prospect from '../mongodb/models/prospect.js';
import User from '../mongodb/models/user.js';

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProspects = async (req, res) => {
    const { 
        _end, 
        _order, 
        _start, 
        _sort, 
        title_like = "", 
        program = ""
    } = req.query;

    const query = {};

    if(program != ''){
        query.program = program;
    }

    if(title_like != ''){
        query.title = { $regex: title_like, $options: "i" };
    }

    try {
        const count = await Prospect.countDocuments({ query });

        const prospects = await Prospect
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order });

            res.header('x-total-count', count);
            res.header('Access-Control-Expose-Headers', 'x-total-count');



        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getProspect = async (req, res) => {
    const { id } = req.params;
    const prospectExists = await Prospect.findOne({ _id: id }).populate('creator');

    if(prospectExists) {
        res.status(200).json(prospectExists);
    } else {
        res.status(404).json({ message: "Prospect not found" });
    };
};

const createProspect = async (req, res) => {
    try {
        const {
            title,
            summary,
            program,
            grantAmount,
            grantType,
            fundingCycle,
            applicationProcess,
            deadline,
            location,
            website,
            email,
            logo,
            stage,
            priority,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found");

        const logoUrl = await cloudinary.uploader.upload(logo);

        const newProspect = await Prospect.create({
            title,
            summary,
            program,
            grantAmount,
            grantType,
            fundingCycle,
            applicationProcess,
            deadline,
            location,
            website,
            email,
            logo: logoUrl.url,
            stage,
            priority,
            creator: user._id,
        });

        user.allProspects.push(newProspect._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Prospect created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            title,
            summary,
            program,
            grantAmount,
            grantType,
            fundingCycle,
            applicationProcess,
            deadline,
            location,
            website,
            email,
            logo,
            stage,
            priority,
         } = req.body;

        const logoUrl = await cloudinary.uploader.upload(logo);

        await Prospect.findByIdAndUpdate(
            { _id: id },
            {
                title,
                summary,
                program,
                grantAmount,
                grantType,
                fundingCycle,
                applicationProcess,
                deadline,
                location,
                website,
                email,
                logo: logoUrl.url || logo,
                stage,
                priority,
            }
        )
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProspect = async (req, res) => {
    try {
        const { id } = req.params;

        const prospectToDelete = await Prospect.findById({ _id: id }).populate('creator');

        const session = await mongoose.startSession();
        session.startTransaction();

        prospectToDelete.remove({ session });
        prospectToDelete.creator.allProspects.pull(prospectToDelete);

        await prospectToDelete.creator.save({ session });
        await session.commitTransaction();

        res.status(200).json({ message: "Prospect deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllProspects,
    getProspect,
    createProspect,
    updateProspect,
    deleteProspect,
}