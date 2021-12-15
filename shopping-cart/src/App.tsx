import { useState } from "react";
import { useQuery } from "react-query";
 
import  Drawer  from "@material-ui/core/Drawer";
// import  LinearProgress  from "@material-ui/core/LinearProgress";
import CircularProgress from '@material-ui/core/CircularProgress';
import  Grid  from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  Badge  from "@material-ui/core/Badge";

import { Wrapper } from "./App.styles";

import Item from "./item/Item";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => await(await fetch('https://fakestoreapi.com/products')).json();


const App = () => {

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  // console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  // if (isLoading) return <LinearProgress/>
  // if(error) return <div>Something went wrong, try again ...</div>

  return (
    <div className="App">
      <div>
        <h1>Product List</h1>
      </div>

      <Wrapper >
        {isLoading && <CircularProgress color="secondary" style={{ marginLeft: '50%', marginTop: '50vh'}}/>} 
        {error && <div>Something went wrong, try again ...</div>} 
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart}/>
            </Grid>
          ))}

        </Grid>
    </Wrapper>
    </div>
  );
}

export default App;
