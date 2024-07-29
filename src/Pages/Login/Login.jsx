import { useContext, useState } from "react";
import { AuthContext } from "../../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { IsAuth, setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const navagate = useNavigate();

  if (IsAuth) {
    navagate("/");
  }
  // make a function for handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // check if email and password are empty
    if (email === "" || password === "") {
      toast.error("Please enter email and password");
      return;
    }
    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password does not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {
          email: email,
          password: password,
          role: "Patient",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setAuth(true);
        localStorage.setItem("patientToken", response.data.data.token);
        toast.success("Login Successfully");
        console.log(IsAuth);
        return <Navigate to={"/"} />;
      }
    } catch (error) {
      toast.error(error.response.data.data.reason);
      console.log(error);
    }
  };
  return (
    <div className="container login-form form-component ">
      <h2>Sign In</h2>
      <p>Please Login to Continue</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          id="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />

        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p>Not Register?</p>
          <Link to={"/register"}>Register Now</Link>
        </div>

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
