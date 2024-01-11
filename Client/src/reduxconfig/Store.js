import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"

const store = configureStore({
    reducer : {
        user : UserReducer
    }
})
store.subscribe(()=>{
    const userstate = store.getState().user.value;
    localStorage.setItem('userdata',JSON.stringify(userstate))
})

export default store ;