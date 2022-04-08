import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Productadd = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
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
            <form onSubmit={saveProduct}>
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
export default Productadd;