import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/about">
        <button>Go to About</button>
      </Link>
      <Link to="/employee">
        <button>EmployeeList</button>
      </Link>
      <Link to="/counter">
        <button>Counter Increasement</button>
      </Link>
      <Link to="/users">
        <button>User Lists</button>
      </Link>
    </div>
  );
}

export default Home;