import mongoose from "mongoose";

const ProspectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String },
    program: { type: String },

    grantAmount: { type: Number },
    grantType: { type: String },
    fundingCycle: { type: String },
    applicationProcess: { type: String },
    deadline: { type: String },

    location: { type: String },
    website: { type: String },
    email: { type: String },
    logo: { type: String },

    stage: { type: String, required: true, default: 'Not Started' },
    priority: { type: String, required: true, default: 'None'},

    allContacts: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
    allProducts: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    allGrants: { type: mongoose.Schema.Types.ObjectId, ref: "Grant" },
    allTeams: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const prospectModel = mongoose.model("Prospect", ProspectSchema);

export default prospectModel;