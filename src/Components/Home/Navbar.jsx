import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { IsAuth, setAuth } = useContext(AuthContext);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handle_Login = async () => {
    navigate("/login");
  };
  const handle_Logout = async () => {
    try {
      await axios
        .get("http://localhost:4000/api/v1/user/patient/logout", {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setAuth(false);
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.response.data.message);
        });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.message);
    }
  };
  return (
    <nav className="container">
      <div className="logo"> Health Care</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/about"}>About US</Link>
        </div>
        {IsAuth ? (
          <button className="logoutBtn btn" onClick={handle_Logout}>
            Logout
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={handle_Login}>
            Login
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setshow(!show)}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
    </nav>
  );
};

export default Navbar;
