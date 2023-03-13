import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import { cartReducer } from './reducers/cartReducer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const data = await axios.get('https://dummyjson.com/products');
      dispatch({
        type: 'ADD_PRODUCTS',
        payload: data.data.products
      })
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App" style={{
      display: 'flex', justifyContent: 'space-between', margin: '10px auto'
    }}>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
