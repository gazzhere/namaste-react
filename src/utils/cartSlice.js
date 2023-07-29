import { createSlice } from "@reduxjs/toolkit";
// slice
const cartSlice=createSlice(
  {
    name:"cart",
    initialState:{
      items:[],

    },
    reducers:{
      additems:(state,action)=>{
        // mutating the state
            state.items.push(action.payload);
      },
      removeitems:(state)=>{
        state.items.pop();
      },
      clearCart:(state)=>{
        state.items.length=0;
      }
    }
  }
)
export const{additems,removeitems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
