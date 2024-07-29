import Hero from "../Home/Hero";
import Appointment_form from "./Appointment_form";

const Appoint_compo = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment"}
        image={"public/signin.png"}
      ></Hero>
      <Appointment_form></Appointment_form>
    </>
  );
};

export default Appoint_compo;
