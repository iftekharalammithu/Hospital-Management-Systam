import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Regester = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [nid, setNid] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setdob] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h1>Regester</h1>
    </div>
  );
};

export default Regester;
