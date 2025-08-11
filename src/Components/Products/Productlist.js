import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../../Styles/Productlist.css'
import Productcard from "./Productcard"
import { fetchProducts } from '../../Features/Products/productsSlice';

function Productslist(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);
    const products=useSelector((state)=>state.products.productList)
    const isLoading = useSelector((state)=>state.products.inProgress)
    return(
        <div className="mainlist">
            {
                isLoading&&<h5>Loading...Please wait</h5>
            }
            {
            products.map((p)=>{
                return <Productcard product={p}/>
            })
        }
        </div>
    );
}
export default Productslist;