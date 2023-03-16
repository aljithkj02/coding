import React, { useEffect, useState } from 'react';
import IndividualProduct from './IndividualProduct';
import Pagination from './Pagination';

const Products = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [])
    const fetchProducts = async () => {
        try {
            let res = await fetch('https://dummyjson.com/products?limit=100');
            let product = await res.json();
            console.log(product.products);
            setData(product.products);
        } catch (err) {
            console.log(err);
        }
    }

    const handlePage = (val) => {
        setPage(val);
    }
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Page: {page}</h2>
            <Pagination page={page} products={data} handlePage={handlePage} />
            <div id='container'>
                {data.slice(page * 10 - 10, page * 10).map((prod) => {
                    return <IndividualProduct key={prod.id} {...prod} />
                })}
            </div>
            {/* <Pagination page={page} products={data} handlePage={handlePage} /> */}
        </>
    )
}

export default Products
