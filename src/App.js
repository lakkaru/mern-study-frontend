import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wellcome</h1>
        <button
          style={{
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "20px 40px",
            fontSize1: "1.5em",
            cursor: "pointer",
          }}
          onClick={() => navigate("/users")}
        >
          Users
        </button>
      </header>
    </div>
  );
}

export default App;
