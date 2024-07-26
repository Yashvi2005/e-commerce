import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => (
                    <Product
                        key={item._id}
                        id={item._id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
