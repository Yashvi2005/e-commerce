import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();
    const [data, setData] = useState()

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        (async () => {
            await axios.get(`/api/v1/product/search?name=${query}`)
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        })()
    }, [query])

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item._id);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={

                                        item.porductImg
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.productName}
                                </span>
                                <span className="desc">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
