
import {useState,useEffect} from "react";
import {useNavigate}  from "react-router-dom"

function User(){

const[user,setUser]=useState([]);
 const navigate=useNavigate();
useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())
  .then((data)=> setUser(data));
},[setUser]);

return (
    <div>
        <h1>Users List</h1>
    <table border="1">
        <thead>
            <tr>
         <th>Id</th>
         <th>Name</th>
         <th>UserName</th>
         <th>Email</th>
         <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {user.map((u)=>
            <tr key={u.id}>
           <td>{u.id}</td>
           <td>{u.name}</td>
           <td>{u.username}</td>
           <td>{u.email}</td>
           <td>
<button onClick={() => navigate(`/user/${u.id}`)}>
  View
</button>           </td>

            </tr>
            
            
            )}
            
        </tbody>
    </table>
    </div>
);

}

export default User;