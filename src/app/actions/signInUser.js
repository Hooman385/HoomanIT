"use server"

import User from "../../models/User";
import { verifyPassword } from "@/lib/auth"
import connectDB from "@/lib/connectDB";

export async function signInUser(currentState, formData) {

    try {
        await connectDB()
    } catch (err) {
        console.log("مشکلی در سرور رخ داده است")
    }
    const enteredEmail = formData.get("email")
    const enteredPassword = formData.get("password")


    if (!enteredEmail || !enteredPassword) {
        return {
            success: false,
            message: "لطفا فیلدهای خواسته‌شده را پر نمایید"
        }
    }


    const user = await User.findOne({ email: enteredEmail })

    if (!user) {
        return {
            success: false,
            message: "حساب مورد نظر یافت نشد"
        }
    }

    const verifiedPassword = await verifyPassword(enteredPassword, user.password)


    if (!verifiedPassword) {
        return {
            success: false,
            message: "حساب مورد نظر یافت نشد"
        }
    } else {

        return {
            success: true,
            message: "ورود با موفقیت انجام شد",
            email: user.email,
            username: user.username,
            id: user.id,
            role: user.role


        }
    }


    // if (!verifiedPassword) {
    //     return {
    //         success: false,
    //         message: "حساب مورد نظر یافت نشد"
    //     }
    // }

}