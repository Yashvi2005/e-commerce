import React, { useEffect, useState } from "react";
import Products from "../../Products/Products";
import axios from "axios";

const RelatedProducts = ({ categoryId }) => {
    const [data, setData] = useState()
    useEffect(() => {
        (async () => {
            await axios.get(`/api/v1/product/getproductByCategory/${categoryId}`)
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        })()
    }, [categoryId])

    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;
