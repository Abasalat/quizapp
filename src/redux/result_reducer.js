import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers:{
        setUserId :(state , action)=>{
            state.userId = action.payload
        },
        pushResultAction: (state, action)=> {
            state.result.push(action.payload)
        },
        updateResultAction: (state, action) => {
            const { trace, checked } = action.payload;
          
            // Ensure the array has enough length to set the value
            if (trace >= state.result.length) {
              state.result = [...state.result, ...new Array(trace - state.result.length + 1)];
            }
          
            state.result[trace] = checked;
          }, 
        resetResultAction: () =>{
            return{
            userId: null,
            result: []
            }
        }
    } 
})
export const {setUserId , pushResultAction , resetResultAction , updateResultAction} = resultReducer.actions;
export default resultReducer.reducer; 