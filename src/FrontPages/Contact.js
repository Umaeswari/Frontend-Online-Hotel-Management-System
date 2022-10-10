import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Navbar from '../Navbar';



function Contact() {
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = () => {
    console.log(to_name + from_name + message);

    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
    };

    emailjs.send('service_33v86pq', 'template_sydvpra', emailContent, 'DN9jSXYFTC5C8nI9U')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div>
      <Navbar/>
    <div className="container border"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://i.pinimg.com/564x/d6/5d/86/d65d867cb5c97dfd8271a35ad392e0fe.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <h1 style={{ marginTop: '25px', color: 'black' }}>Contact Me</h1>
      <div className="row" style={{ margin: "25px 85px 75px 100px", color: 'white' }}

      >
        <label style={{ marginTop: '25px', color: 'black' }}><b>UserName</b></label>
        <input type="name" name="name" className="form-control" placeholder="Username"
          onChange={(event) => { setTo_name(event.target.value) }} />

        <label style={{ marginTop: '25px', color: 'black' }}><b>Email</b></label>
        <input type="email" name="user_email" className="form-control" placeholder="Email"
          onChange={(event) => { setFrom_name(event.target.value) }} />

        <label style={{ marginTop: '25px', color: 'black' }}><b>Message</b></label>
        <textarea data-testid="para" name="message" rows="4" className="form-control" placeholder="Message"
          onChange={(event) => { setMessage(event.target.value) }} />
        <input type="submit" onClick={submitInfo} value="Send"
          className=" btn btn-primary "
          style={{ marginTop: '30px' }} />

      </div>
    </div>
    </div>
  )
};
export default Contact;