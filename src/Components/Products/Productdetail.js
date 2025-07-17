import { useParams } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import Cartcontext from "../../Contexts/Cartcontext";
import '../../Styles/Productdetail.css'
function Productdetail(){
    const cartParams=useContext(Cartcontext);
    const params = useParams();
    const [prods,setProds]=useState(null);
    const prodId = params.prodId;
    function loadProds(){
        fetch("https://fakestoreapi.com/products/"+prodId).then((response)=>
        response.json()).then((data)=>{
            setProds(data);
        }).
        catch((error)=>{
            console.log(error);
        });
    }
    useEffect(()=>{
        loadProds();},[prodId]);
     if(!prods){
        return <p>Loading Product details...</p>
     }
     function star(){
    var st="";
    for(var i=0;i<Math.round(prods.rating.rate);i++){
        st=st+'⭐️';
    }
    return st;
}
function handleClick()
{
   cartParams.saveCart(prods);
}
console.log(cartParams.cartProducts);
    return(
        <div className="detail">
            <div className="detail-img">
        <img src={prods.image} height={400}/>
        </div>
        <div className="detail-text">
            <h4>{prods.title}</h4>
            <p>{star()}{prods.rating.rate}</p>
            <hr/>
            <p className="price">Rs. {prods.price}</p>
            <div>
                <h5>Available offers</h5>
                <ul>
                    <li>10% instant discount on ICICI Credit Cards</li>
                    <li>No cost EMI available on orders above Rs. 3000</li>
                    <li>Get extra Rs. 200 off with UPI payment</li>
                    <li>Axis Bank 5% Cashback on Shopaholic Axis Credit Card</li>
                </ul>
            </div>
            <hr/>
            <h5>About this item</h5>
            <p className="description">{prods.description}</p>
            <button className="add_cart" onClick={handleClick}>Add to Cart</button>
        </div>      
        </div>
    )
}
export default Productdetail;