// "use server"

// import connectDB from "@/utils/connectDB"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"

// const getUserInfo = async () => {

//     try {
//         await connectDB();
//     } catch (err) {
//         console.log("error in connecting to DB")
//     }

//     const session = await getServerSession(authOptions)


//     if (!session) {
//         console.log("Unauthenticated, please sign in first")
//         return

//     } else {
//         // const signedInUser = await User.findOne({ email: session.user.email })

//         // console.log(signedInUser)
//         // const { username, email, } = signedInUser
//         // return JSON.parse(JSON.stringify({ username, email }))
//     }


// }

// export default getUserInfo