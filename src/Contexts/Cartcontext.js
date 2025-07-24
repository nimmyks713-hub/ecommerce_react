import { createContext } from "react";
const intialCartParams={
    cartProducts:[],
    saveCart:(productList)=>{},
    removeCart:(productId)=>{}
}
const Cartcontext= createContext(intialCartParams);
export default Cartcontext;

