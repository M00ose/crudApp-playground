import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    due: { type: Date },
    assignedTo: { type: String },
    prospect: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
});

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;