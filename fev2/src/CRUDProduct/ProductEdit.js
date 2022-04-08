import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate , useParams} from "react-router-dom";

const ProductEdit = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, {
                name,
                price,
                description
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
export default ProductEdit;