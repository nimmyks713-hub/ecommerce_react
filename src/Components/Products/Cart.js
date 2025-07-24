import { useContext } from "react";
import '../../Styles/Cart.css';
import Cartcontext from "../../Contexts/Cartcontext";
import Cartcard from "./Cartcard";
function Cart(){
    const {cartProducts,removeCart} = useContext(Cartcontext);
    return(
        <div className="cart-main">
        <h2>Shopping Cart</h2>
        <hr/>
        {
                cartProducts.map((c,index)=>(
                 <Cartcard key={index} cartproduct={c} removeCart={removeCart}></Cartcard>
            ))
        }
        </div>
    )
}
export default Cart;