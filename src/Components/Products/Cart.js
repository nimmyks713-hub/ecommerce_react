import '../../Styles/Cart.css';
import Cartcard from "./Cartcard";
import { useSelector } from 'react-redux';
function Cart(){
    const cartProducts = useSelector((state)=>state.cart.cartProducts);
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