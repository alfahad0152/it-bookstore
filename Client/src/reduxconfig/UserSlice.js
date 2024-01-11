import { createSlice } from "@reduxjs/toolkit";

function getLocalData()
{
    const data = localStorage.getItem('userdata')
    if(data==undefined || data==null)
    return {
        name : undefined,
        type : undefined,
        token :undefined,
        islogin : false
    }
    else 
    return JSON.parse(data)
}
const slice = createSlice({
    name : 'user',
    initialState : {
        value : getLocalData()
    },
    reducers : {
        setUserInfo : (state,action)=>
        {
            state.value = action.payload;
        },
        delUserInfo : (state,action)=>
        {
            state.value = {
                name : undefined,
                type : undefined,
                token :undefined,
                islogin : false
            }
        }
    }
})

export default slice.reducer;
export const {setUserInfo,delUserInfo} = slice.actions ;