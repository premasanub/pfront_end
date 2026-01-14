import React from "react";
import { ToastContainer } from "react-toastify";
//import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import NotFound from "./Pages/Notfound";
import End from "./Pages/End";
const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
            <Route path="*" element={<NotFound />} />
          <Route path="/End" element={<End />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;