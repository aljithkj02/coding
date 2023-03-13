import React, { useEffect, useState } from 'react';

const Cart = ({ state, dispatch }) => {
    const [total, setTotal] = useState(0);
    const { products, cart } = state;

    useEffect(() => {
        setTotal(cart.reduce((acc, ele) => {
            return acc + Number(ele.price) * ele.qty;
        }, 0))
    }, [cart])

    const changeQty = (id, qty) => {
        dispatch({
            type: 'CHANGE_QTY',
            payload: {
                id,
                qty
            }
        })
    }
    return (
        <div style={{
            width: '20%', background: '#ffe6e6', display: 'flex', flexDirection: 'column'
        }}>
            <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b><br />
            <b style={{ fontSize: 20, alignSelf: 'center' }}>Sub total: ${total}</b>
            {cart.length == 0 ? (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>No items</div>
            ) : (
                cart.map(item => {
                    return (
                        <div style={{ border: '1px solid gray', padding: '10px' }}>
                            <div key={item.id} style={{
                                display: 'flex',
                                padding: '10px',
                                margin: 5,
                                gap: 15
                            }}>
                                <img src={item.thumbnail} alt={item.title} style={{
                                    height: 70, objectFit: 'cover', width: 70
                                }} />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <span>{item.title}</span>
                                    <b>{item.price}</b>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', gap: 10
                            }}>
                                <button style={{
                                    padding: '5px 10px', background: 'blue',
                                    color: 'white', border: 'none', cursor: 'pointer'
                                }}
                                    onClick={() => {
                                        changeQty(item.id, item.qty - 1);
                                    }}
                                >-</button>
                                <span>{item.qty}</span>
                                <button style={{
                                    padding: '5px 10px', background: 'blue',
                                    color: 'white', border: 'none', cursor: 'pointer'
                                }}
                                    onClick={() => {
                                        changeQty(item.id, item.qty + 1);
                                    }}>+</button>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Cart
