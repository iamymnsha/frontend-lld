import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Todos from "./components/Todos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}

export default App;
