import React, { useEffect, useState } from "react";
import {  Button } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
import './App.css';
import axios from "axios";

export default function Users(){

    const [users,setUsers] = useState([])

useEffect(()=>{
axios.get('http://localhost:3001')
.then(res=>setUsers(res.data))
.catch(err=>console.log(err));
},[])

const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/"+id)
    .then(res=>{
        window.location.reload()
        console.log(res)})
    .catch(err=>console.log(err));
}

    return (
        <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>TODO APP</h2></div>
                    <div className="col-sm-8">
                        <Link to='/create'className="btn btn-success"> Add New</Link>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.title}</td>
                        <td>{user.description}</td>
                        <td>
                                  
                                <Link to={`/update/${user._id}`} className="btn btn-primary">Update</Link>{' '}{' '}
                                    <Button variant="danger" onClick={()=>handleDelete(user._id)}>Delete</Button>
                                    </td>
                            
                    </tr>})}
                
                      
                </tbody>
            </table>
        </div>
    </div>     
    )
}