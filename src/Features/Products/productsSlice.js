import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(thunkAPI)=>{
        const response=await fetch("https://fakestoreapi.com/products");
        return response.json();
    }
)
export const fetchProductsById = createAsyncThunk(
    'products/fetchProductsById',
    async(id,thunkAPI) => {
        const response = await fetch("https://fakestoreapi.com/products/"+id);
        return response.json();
    }
)
const initialState = {
    productList:[],
    selectedProduct:null,
    inProgress:false,
    productDetailLoading:false
}
export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{

    },
   extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
        state.inProgress=true;
    });
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.inProgress=false;
        state.productList=action.payload;
    });
    builder.addCase(fetchProducts.rejected,(state)=>{
        state.inProgress=false;
    });
    builder.addCase(fetchProductsById.pending,(state)=>{
        state.productDetailLoading=true;
    })
    builder.addCase(fetchProductsById.fulfilled,(state,action)=>{
         state.productDetailLoading=false;
         state.selectedProduct=action.payload;
    });
    builder.addCase(fetchProductsById.rejected,(state)=>{
        state.productDetailLoading = false;
    });
   } 
})
export default productsSlice.reducer