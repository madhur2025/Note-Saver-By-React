import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    pastes:localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
    name:'pastes',
    initialState,
    reducers : {
        addToPastes:(state,action) => {
            // the data (paste we're sending from home in this function is in payload so now wo put it in paste variable(paste))
            const paste = action.payload; 
            state.pastes.push(paste); // by this we put the data in centralize store
            localStorage.setItem("pastes",JSON.stringify(state.pastes)); // 
            alert("Paste created");

        },
        updateToPastes:(state,action) => {
            const paste = action.payload; // recieved data in paste from payload
            const index = state.pastes.findIndex((item)=>item._id === paste._id) // it brings the index of paste if 
            if(index >= 0){
                // paste.state[index] = paste;
                state.pastes[index] = paste;
                localStorage.setItem('pastes',JSON.stringify(state.pastes));
                alert("Paste updated")
            }
        },
        resetAllPastes:(state,action) => {
            state.pastes = []
            localStorage.removeItem("pastes");
            alert("Paste reset")
        },
        removeFromPastes:(state,action) => {
            const pasteId = action.payload;
            console.log(pasteId);
            const index = state.pastes.findIndex((item)=>item._id === pasteId);

            if(index >= 0){
                state.pastes.splice(index,1);
                localStorage.setItem("pastes",JSON.stringify(state.pastes))
                alert("Paste deleted / removed")
            }
        }
    }
})
export const {addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pasteSlice.actions
export default pasteSlice.reducer