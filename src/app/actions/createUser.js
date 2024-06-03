"use server"

import connectDB from "@/lib/connectDB";
import User from "../../models/User";
import { hashPassword } from "@/lib/auth";


export const createUser = async (currentState, formData) => {
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
    const usernameRegex = /[^\p{ P }\p{ N }]/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;



    if (!email && !password && !username) {
        return {
            success: false,
            message: "برای ثبت نام لطفا فیلدها را پر کنید"
        }

    } else if (!email) {
        return {
            success: false,
            message: "ایمیل وارد نشده است"
        }

    } else if (email && !emailRegex.test(email)) {

        return {
            success: false,
            message: "ایمیل وارد شده نادرست است"
        }
    } else if (!password) {
        return {
            success: false,
            message: "رمز عبور وارد نشده است"
        }

    } else if (password && !passwordRegex.test(password)) {
        return {
            success: false,
            message: "رمز عبور وارد شده باید بیشتر از ۵ حرف باشد و دستکم یک حرف بزرگ انگلیسی، یک عدد و یک کارکتر ویژه مانند علامت @ داشته باشد"
        }
    } else if (!username) {
        return {
            success: false,
            message: "لطفا یک نام کاربری برای خود انتخاب نمایید"
        }
    } else if (username && !usernameRegex.test(username)) {
        return {
            success: false,
            message: "نام کاربری باید بیش از ۳ کارکتر باشد و نباید دارای علامتی باشد"
        }

    } else {

        await connectDB()
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return {
                success: false,
                message: "یک حساب با این ایمیل از پیش ساخته شده "
            }
        }
        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({ username: username, email: email, password: hashedPassword })



        return {
            success: true,
            message: "حساب شما با موفقیت ساخته شد"

        }
    }





}