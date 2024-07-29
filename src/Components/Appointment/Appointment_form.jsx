import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Appointment_form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [nid, setNid] = useState("");
  const [dob, setdob] = useState("");
  const [appointment_date, setappointment_date] = useState("");
  const [has_visited, setHas_visited] = useState("");
  const [address, setAddress] = useState("");
  const [doctor_lastname, setDoctor_lastname] = useState("");
  const [doctor_firstname, setDoctor_firstname] = useState("");
  const [doctors, setDoctors] = useState([]); // State to store fetched doctors
  const [deperment, setdeperment] = useState("");

  const deperment_name = [
    "Surgery",
    "Pediatrics",
    "Anesthesiology",
    "Cardiology",
    "Oncology",
    "Radiology",
    "neauro sergent",
  ];

  const handleAppoint = (e) => {
    e.preventDefault();
    const has_visitedbool = Boolean(has_visited);
    //   make a useEffect and fatch the api with axios http://localhost:4000/api/v1/appintment/apply_appointment and  send the all the data
    const data = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      nid,
      dob,
      appointment_date,
      has_visited: has_visitedbool,
      address,
      deperment,
      doctor_lastname,
      doctor_firstname,
    };
    axios
      .post("http://localhost:4000/api/v1/appintment/apply_appointment", data, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/doctors"
        );
        // console.log(response.data.data);
        setDoctors(response.data.data); // Update the doctors state with fetched data
        // console.log(doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors(); // Call the function to fetch doctors on component mount
  }, []);
  return (
    <>
      <div className="container register-form form-component">
        <h2>Appointment</h2>
        <form onSubmit={handleAppoint}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="NID"
              id="nid"
              value={nid}
              onChange={(e) => setNid(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              id="dob"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              id="appointment_date"
              value={appointment_date}
              onChange={(e) => setappointment_date(e.target.value)}
            />
          </div>
          <div>
            <select
              value={deperment}
              onChange={(e) => {
                setdeperment(e.target.value);
                setDoctor_firstname("");
                setDoctor_lastname("");
              }}
            >
              {deperment_name.map((dpart, index) => {
                return (
                  <option key={index} value={dpart}>
                    {dpart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${doctor_firstname} ${doctor_lastname}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctor_firstname(firstName);
                setDoctor_lastname(lastName);
              }}
              disabled={!deperment}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor?.doctor_deperment === deperment)
                .map((doc, index) => {
                  return (
                    <option
                      key={index}
                      value={`${doc.firstName} ${doc.lastName}`}
                    >{`${doc.firstName} ${doc.lastName}`}</option>
                  );
                })}
            </select>
          </div>
          <textarea
            rows="10"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have You Visited Before?</p>
            <input
              style={{ flex: "none", width: "25px" }}
              type="checkbox"
              checked={has_visited}
              onChange={(e) => setHas_visited(e.target.checked)}
            />
          </div>

          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="btn btn-primary">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment_form;
