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
        programArea = ""
    } = req.query;

    const query = {};

    if(programArea != ''){
        query.programArea = programArea;
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

};

const createProspect = async (req, res) => {
    try {
        const {
            title,
            note,
            programArea,
            location,
            grantAmount,
            photo,
            email,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found");

        const photoUrl = await cloudinary.uploader.upload(photo);

        const newProspect = await Prospect.create({
            title,
            note,
            programArea,
            location,
            grantAmount,
            photo: photoUrl.url,
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

const updateProspect = async (req, res) => {};
const deleteProspect = async (req, res) => {};

export {
    getAllProspects,
    getProspect,
    createProspect,
    updateProspect,
    deleteProspect,
}