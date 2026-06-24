import {BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Employee from "./component/Employee";
import Counter from "./Counter";
import Users from "./component/Users";


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/employee" element={<Employee/>}/>
            <Route path="/counter" element={<Counter/>}/>
                        <Route path="/users" element={<Users/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;