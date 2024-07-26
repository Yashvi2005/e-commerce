import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";
import axios from "axios";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    console.log(products)

    const getProducts = async () => {
        await axios.get("/api/v1/product/getallproduct")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    };
    const getCategories = async () => {
        await axios.get("/api/v1/categroy/getCategory")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
