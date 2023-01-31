import { createSlice } from "@reduxjs/toolkit";

const initialsate ={
    themeMode:"light",
}
export const  themeSlice = createSlice({
    name:"theme",
    initialState:initialsate,
    reducers:{
        ChangeTheme:(state)=> (state.changeTheme=="light")? "dark":"light"
    },
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer;