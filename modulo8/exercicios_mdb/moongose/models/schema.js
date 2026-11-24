import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";


const newSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true,"O nome é obrigatório."],
            trim: true,
        },
        preço: {
            type: Number,
            required: [true,"O preço é obrigatório."],
            trim: true,
        }
    },
    { timestamps: true,}
);


const contato = mongoose.model("Contato", newSchema);
export default contato;