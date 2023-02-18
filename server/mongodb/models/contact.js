import mongoose, { mongo } from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    organization: { type: String, required: true },
    position: { type: String },
    email: { type: String },
    phone: { type: String },
    linkedin: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const contactmodel = mongoose.model("Contact", ContactSchema);

export default contactmodel;