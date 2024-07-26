import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const Category = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        (async () => {
            await axios.get(`/api/v1/product/getproductByCategory/${id}`)
                .then(res => {
                    setProduct(res.data)
                })
                .catch(err => console.log(err))
        })()
    }, [])

    console.log(product)

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        product?.data[0].categoryId.categoryName
                    }
                </div>
                <Products
                    innerPage={true} products={product} />
            </div>
        </div>
    );
};

export default Category;
