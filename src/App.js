import "./css/App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Link to="">
          <div className="navi-link">Home</div>
        </Link>
        <Link to="today">
          <div className="navi-link">Today</div>
        </Link>
        <Link to="log">
          <div className="navi-link">Log</div>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
