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
        },
        ativo: {
            type: Boolean,
            required: [true,"O ativo é obrigatório."]
        },
    },
    { timestamps: true,}
);


const contato = mongoose.model("Contato", newSchema);
export default contato;


const produto = mongoose.model("Produto", newSchema);
export default produto;
