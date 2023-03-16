import React from 'react'

const IndividualProduct = (prod) => {
    return (
        <div className="product__box">
            <div>
                <img src={prod.thumbnail} alt={prod.title} />
            </div>
            <div>
                <span>{prod.title}</span>
                <span>{prod.price}</span>
            </div>
        </div>
    )
}

export default IndividualProduct
