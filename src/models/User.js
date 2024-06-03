import { model, models, Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: "USER"
    }
}, { timestamps: true })

const User = models.User || model("User", userSchema)
export default User;