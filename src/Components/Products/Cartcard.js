import '../../Styles/Cartcard.css'
function Cartcard(props){
    return(
        <div>
        <div className='cart-container'> 
            <div>
         <img src={props.cartproduct.image} className="cart-image"/>
         </div>
         <div><p>{props.cartproduct.title}</p></div>
         <div><p>Rs. {props.cartproduct.price}</p></div>
        </div><hr/>
        </div>
    )
}
export default Cartcard;