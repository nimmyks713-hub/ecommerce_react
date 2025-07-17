import { createContext } from "react";
const intialCartParams={
    cartProducts:[],
    saveCart:(productList)=>{}
}
const Cartcontext= createContext(intialCartParams);
export default Cartcontext;

