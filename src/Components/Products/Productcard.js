import '../../Styles/Productcard.css'
import { Link } from 'react-router-dom';
function Productcard(props){
    function star(){
    var st="";
    for(var i=0;i<Math.round(props.product.rating.rate);i++){
        st=st+'⭐️';
    }
    return st;
}

    return(
        
        <div className="prodcard">
            <img src={props.product.image} width="200px" className='image'/>
            <Link to={"/productlist/"+props.product.id} ><h4 className='title'>{props.product.title}</h4></Link>
            <p className='description'>{props.product.description.slice(0,80)+'...'}</p>   
            <p className='price'>Rs. {props.product.price}</p>    
            <span>{star()}{props.product.rating.rate}</span>   
            <div><button className='cart'>Add to cart</button> </div> 
        </div>
    )
}
export default Productcard;