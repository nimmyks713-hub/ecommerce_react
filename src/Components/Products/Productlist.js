import { useState,useEffect } from "react";
import '../../Styles/Productlist.css'
import Productcard from "./Productcard"

function Productslist(){
    const [products,setProducts]= useState([]);
    function loadProducts(){
        fetch("https://fakestoreapi.com/products").then((response)=>{
            response.json().then((data)=>{
                setProducts(data);
            })
        })
    }
                useEffect(()=>{loadProducts();},[]);

    return(
        <div className="mainlist">
            {
            products.map((p)=>{
                return <Productcard product={p}/>
            })
        }
        </div>
    );
}
export default Productslist;