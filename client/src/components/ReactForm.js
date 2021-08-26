import React from "react";

import { useState } from "react";

function ReactForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;
    const res = await fetch(
      "https://contactform-5cdf9-default-rtdb.firebaseio.com/youtubecontactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );
  };

  return (
    <div>
      <h1 className="text-center mt-4">Get in Touch</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={user.name}
              onChange={getUserData}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              required
              value={user.email}
              onChange={getUserData}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your Phone</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="phone"
              required
              value={user.phone}
              onChange={getUserData}
              placeholder="Your Phone"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your Message</label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              name="message"
              required
              value={user.message}
              onChange={getUserData}
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReactForm;
