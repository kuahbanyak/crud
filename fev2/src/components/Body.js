import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
 
const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
        deleteUsers();
        updateUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/home");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 10000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
    const deleteUsers = async (id) => {
        await axiosJWT.delete(`http://localhost:5000/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        getUsers();
    }
    const updateUsers = async (id) => {
        await axiosJWT.put(`http://localhost:5000/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        getUsers();
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={users.id}>
                            <td>{index + 1}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <button onClick={() => deleteUsers(users.id)} className="button is-danger">Delete</button>
                            <button onClick={() => updateUsers(users.id)} className="button is-info">Edit</button>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </div>
    )
}
 
export default Dashboard