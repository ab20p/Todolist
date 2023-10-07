import React,{useEffect,useState} from "react";
import './App.css';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateUsers() {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(res => {
        setName(res.data.name)
        setTitle(res.data.title)
        setDescription(res.data.description)
      })
      .catch(err => console.log(err));
  }, [])


  const onUpdate = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+ id,{name,title,description})
    .then(res=>{
      navigate('/');
      console.log(res)})
    .catch(err=>console.log(err));
  }

  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Update Task</h2>

        </div>
        <div className="form">
          <input type="text" value={name} className="form-field animation a3" placeholder="Task Name" onChange={(e)=>setName(e.target.value)}/>
          <input type="text" value={title} className="form-field animation a4" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
          <input type="text" value={description} className="form-field animation a4" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>

          <button className="animation a6" onClick={onUpdate}>Update</button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}