import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
