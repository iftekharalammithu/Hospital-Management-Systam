import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Message_Form = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const handle_submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send_message",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      toast.success(response.data.message);
      setfirstName("");
      setlastName("");
      setemail("");
      setphone("");
      setmessage("");
    } catch (error) {
      toast.error(error.response.data.reason);
      console.log(error.response.data.reason);
    }
  };
  return (
    <div className="container form-component message-form">
      <h2>Send Us a Message</h2>
      <form onSubmit={handle_submit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button className="btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Message_Form;
