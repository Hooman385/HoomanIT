// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import getUserInfo from "@/app/actions/getUserInfo";


// const initialState = {
//     details: {

//     }
// }

// export const getUser = createAsyncThunk("user/getUser",

//     async () => {
//         try {

//             const signedInUser = await getUserInfo()
//             return signedInUser;

//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error.message });
//         }
//     }
// )


// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {},

//     extraReducers: (builder) => {
//         builder.addCase(getUser.pending, (state) => {
//             state.isLoading = true
//         })

//         builder.addCase(getUser.fulfilled, (state, action) => {
//             state.isLoading = false
//             state.details = action.payload
//         })

//         builder.addCase(getUser.rejected, (state, action) => {
//             state.isLoading = false,
//                 state.error = action.error.message
//         })
//     }
// })


// export default userSlice.reducer;