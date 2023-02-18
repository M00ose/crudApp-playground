import mongoose, { mongo } from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    allUsers: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
});

const teamModel = mongoose.model("Team", TeamSchema);

export default teamModel;