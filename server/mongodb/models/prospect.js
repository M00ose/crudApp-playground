import mongoose from "mongoose";

const ProspectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    note: { type: String, required: true },
    programArea: { type: String, required: true },
    location: { type: String, required: true },
    grantAmount: { type: Number, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const prospectModel = mongoose.model("Prospect", ProspectSchema);

export default prospectModel;