import { removeFromCart } from '../../Features/Cart/cartSlice';
import '../../Styles/Cartcard.css'
import {useDispatch} from 'react-redux'
function Cartcard(props){
    const dispatch = useDispatch();
    return(
        <div>
        <div className='cart-container'> 
            <div>
         <img src={props.cartproduct.image} className="cart-image"/>
         </div>
         <div><p>{props.cartproduct.title}</p></div>
         <div><p>Rs. {props.cartproduct.price}</p></div>
         <div><button className='btn btn-secondary' onClick={()=> dispatch(removeFromCart(props.cartproduct.id))}>Remove</button></div>
        </div><hr/>
        </div>
    )
}
export default Cartcard;