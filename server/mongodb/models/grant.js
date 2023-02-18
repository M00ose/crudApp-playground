import mongoose, { mongo } from "mongoose";

const GrantSchema = new mongoose.Schema({
    prospect: { type: String, required: true },
    amount: { type: String, required: true },
    type: { type: String, required: true },
    program: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reportingReqs: { type: String },
    nextDeadline: { type: Date },
    note: { type: String },
    file: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const grantModel = mongoose.model("Grant", GrantSchema);

export default grantModel;