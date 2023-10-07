import React, { useState } from "react";
import '../src/App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CreateUsers(){
  const [name,setName] = useState('');
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const navigate = useNavigate();


  const Submit = (e) =>{
   e.preventDefault();
axios.post("http://localhost:3001/createUser",{name,title,description})
.then(res=>{
  navigate('/');
  console.log(res)})
.catch(err=>console.log(err));
  }
    return (
<div className="container">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Add New Task</h2>
      
    </div>
    <div className="form">
      <input type="text" value={name} className="form-field animation a3" placeholder="Task Name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" value={title} className="form-field animation a4" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" value={description} className="form-field animation a4" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
      
      <button className="animation a6" onClick={Submit}>Create</button>
    </div>
  </div>
  <div className="right"></div>
</div>
    )
}