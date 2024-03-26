import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice=createSlice({
    name:"basket",
    initialState:{
        items: [],
        
    },
    reducers:{
        addBasket:(state,action)=>{
            const existingIndex=state.items.findIndex(item=>item.id===action.payload.id)
            if (existingIndex>=0) {
                state.items[existingIndex].count+=1
                localStorage.setItem("basket",JSON.stringify(state.items))
            }         
            else{
                state.items.push(action.payload)
                localStorage.setItem("basket",JSON.stringify(state.items))
            }
            state.total=state.items.reduce((price,item)=>price+=item.price*item.count, 0)
        },
        changeCount:(state,action)=>{
            const existingIndex=state.items.findIndex(product=>product.id===action.payload.id)
            if (state.items[existingIndex].count>1) {
                state.items[existingIndex].count-=1
                localStorage.setItem("basket",JSON.stringify(state.items))
            }
            else{
                state.items.filter(product=>product.id!==action.payload.id)
            }
            localStorage.setItem("basket",JSON.stringify(state.items))
            state.total=state.items.reduce((price,item)=>price+=item.price*item.count, 0)
        },
        removeBasket:(state,action)=>{
            state.items=state.items.filter(product=>product.id!==action.payload)
            localStorage.setItem("basket",JSON.stringify(state.items))
          
        },
    
       
    }
})

export const {addBasket,changeCount,removeBasket,saleBasket,removeSale}=BasketSlice.actions
export default BasketSlice.reducer