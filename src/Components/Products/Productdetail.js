import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import '../../Styles/Productdetail.css'
import { fetchProductsById } from "../../Features/Products/productsSlice";
import { addToCart } from "../../Features/Cart/cartSlice";
function Productdetail(){
    const params = useParams();
    const prodId = params.prodId;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductsById(prodId));},[prodId]);
     const isLoading = useSelector((state)=>state.products.productDetailLoading);
     const prods=useSelector((state)=>state.products.selectedProduct);
     function star(){
    var st="";
    for(var i=0;i<Math.round(prods.rating.rate);i++){
        st=st+'⭐️';
    }
    return st;
}
if (isLoading || !prods) {
        return <h5>Loading... Please wait</h5>;
    }
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
            <button className="add_cart" onClick={()=>dispatch(addToCart(prods))}>Add to Cart</button>
        </div>      
        </div>
    )
}
export default Productdetail;