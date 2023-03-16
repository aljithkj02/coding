import React from 'react';

const Pagination = ({ page, products, handlePage }) => {

    const pageHandler = (val) => {
        handlePage(page + val);
    }
    return (
        <div id="pagination__div">
            <button disabled={page == 1} onClick={() => pageHandler(-1)}>prev</button>
            {[...Array(products.length / 10)].map((ele, i) => {
                return <span key={i} style={(page == i + 1) ? {
                    border: '2px solid red'
                } : {}}
                    onClick={() => handlePage(i + 1)}
                >{i + 1}</span>
            })}
            <button disabled={page == (products.length / 10)} onClick={() => pageHandler(1)}>next</button>
        </div >
    )
}

export default Pagination
