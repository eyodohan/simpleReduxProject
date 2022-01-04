import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddContact />} />
        <Route path="edit">
          <Route path=":id" element={<EditContact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
