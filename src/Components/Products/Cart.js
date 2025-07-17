import { useContext } from "react";
import '../../Styles/Cart.css';
import Cartcontext from "../../Contexts/Cartcontext";
import Cartcard from "./Cartcard";
function Cart(){
    const {cartProducts} = useContext(Cartcontext);
    return(
        <div className="cart-main">
        <h2>Shopping Cart</h2>
        <hr/>
        {
                cartProducts.map((c,index)=>(
                 <Cartcard key={index} cartproduct={c}></Cartcard>
            ))
        }
        </div>
    )
}
export default Cart;