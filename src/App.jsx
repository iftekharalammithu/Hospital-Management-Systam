import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Regester/Register";
import Appointment from "./Pages/Appointment/Appointment";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Home/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "./main";
import axios from "axios";

const App = () => {
  const { IsAuth, setAuth, setuser } = useContext(AuthContext);

  useEffect(() => {
    const getuser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setuser(res.data);
          setAuth(true);
        }
      } catch (error) {
        setAuth(false);
        setuser("");
        console.log(error);
      }
    };
    getuser();
  }, [IsAuth]);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
};

export default App;
