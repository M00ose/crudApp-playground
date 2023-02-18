import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allProspects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prospect" }],
    allContacts: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
    allProducts: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    allGrants: { type: mongoose.Schema.Types.ObjectId, ref: "Grant" },
    allTeams: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;