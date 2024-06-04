import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true})

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    colors: {
        type: Array,
        required: false
    },

    warranty: {
        type: String,
        required: true
    },
    warrantyName: {
        type: String,
        required: false,
    },

    quantity: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    specs: {
        type: Array,
        required: true,
    },
    productImages: {
        type: Array,
        required: true,
    },
    comments: {
        type: [commentSchema]
    }

}, { timestamps: true }
)

const Product = models.Product || model("Product", productSchema)
export const Comment = models.Comment || model("Comment", commentSchema)

export default Product

