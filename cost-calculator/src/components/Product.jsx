import React from 'react';
import Item from './Item';

const Product = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <div style={{
            width: '80%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'
        }}>
            Products
            {products.map(item => {
                return <Item key={item.id} item={item} state={state} dispatch={dispatch} />
            })}
        </div>
    )
}

export default Product
