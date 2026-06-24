
import { useRef } from "react";

function EmployeeList(){

const inputRef=useRef();
    const employee=[
        {id:1,name:"Ritesh",age:34},
        {id:2,name:"Dulal",age:34},
        {id:3,name:"Pranjal",age:34}
    ]

    return (
        <div>
            <input type="text"  ref={inputRef}></input>
            <button onClick={()=>inputRef.current.focus()}>focus</button>
            <h1>EmployeeList</h1>
            <table border="1">
                
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
               {employee.map((emp)=>(
                <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
               </tr>
               ))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;