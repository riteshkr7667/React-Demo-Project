
import {useState,useEffect,useRef} from "react";

function Counter(){

    const[count,setCount]=useState(0);
    const prevcount=useRef();

    useEffect(()=>{
        prevcount.current=count;
    },[count]);
    return(
    <div>
        <h3>Count:{count}</h3>
        <h3>PrevCount:{prevcount.current}</h3>

        <button onClick={()=>setCount(count+1)}>Increasement</button>
    </div>

    )
}
export default Counter;