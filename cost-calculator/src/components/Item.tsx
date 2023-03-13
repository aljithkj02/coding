import React from 'react';

const Item = ({ item, state, dispatch }) => {
    const { cart } = state;
    return (
        <div key={item.id} style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            border: '1px solid gray',
            width: '30%',
            marginTop: '10px',
            gap: '10px'
        }}>
            <img src={item.thumbnail} alt={item.title} style={{
                height: 200, objectFit: 'cover'
            }} />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span>{item.title}</span>
                <b>{item.price}</b>
            </div>
            {
                cart.some(p => p.id === item.id) ? (
                    <button style={{
                        padding: '10px',
                        background: 'red',
                        borderRadius: '5px',
                        color: 'white',
                        border: 'none'
                    }}
                        onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: item.id
                            })
                        }}
                    >
                        Remove from Cart
                    </button>
                ) : (
                    <button style={{
                        padding: '10px',
                        background: 'green',
                        borderRadius: '5px',
                        color: 'white',
                        border: 'none'
                    }}
                        onClick={() => {
                            item.qty = 1;
                            dispatch({
                                type: 'ADD_TO_CART',
                                payload: item
                            })
                        }}
                    >
                        Add to Cart
                    </button>
                )
            }

        </div>
    )
}

export default Item
