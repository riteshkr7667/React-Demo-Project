
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Userdetails(){
 const {id}=useParams();
    const[user,setUser]=useState([]);

useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=>res.json()).then((data)=>setUser(data))
},[setUser]);

return (
    <div>
        <h2>User Details</h2>
        <p>Id:{user.id}</p>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <p>phone:{user.phone}</p>



    </div>
)

}
export default Userdetails;