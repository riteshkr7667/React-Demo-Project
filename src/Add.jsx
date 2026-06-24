import { useState } from "react";


function Add(){

    const[a,setA]=useState("");
    const[b,setB]=useState("");

    return(
        <div>
        <input type="number" value={a} onChange={(e)=>setA(Number(e.target.value))}></input>
                  +  <input type="number" value={b} onChange={(e)=>setB(Number(e.target.value))}></input>

                ={a+b}

        </div>
    );
}

export default Add;