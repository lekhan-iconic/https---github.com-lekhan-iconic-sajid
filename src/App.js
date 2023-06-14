import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
