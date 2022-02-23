import React from "react";
import { useState } from "react";
import classes from "./Input.module.css";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

//     background: #090e28; body background
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

AOS.init();
toast.configure();
function ReactForm(props) {
  console.log(props);
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

    if (!name || !email || !phone || !message) {
      toast.error(
        "Please fill the fields again",

        {
          position: toast.POSITION.BOTTOM_CENTER,

          autoClose: 20000,
        }
      );
    } else {
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
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        toast.success(
          `Thank you ${name} for contacting me, I will respond you on your email:  ${email}  as soon as possible.`,
          {
            position: toast.POSITION.BOTTOM_CENTER,

            autoClose: 30000,
          }
        );
      }
    }
  };

  return (
    <div data-aos="slide-right" data-aos-duration="2000">
      <h1 className="text-center mt-4">Your Task Description</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">
              {" "}
              <strong> Your Name </strong>{" "}
            </label>
            <input
              autoFocus
              type="text"
              className={`form-control ${classes.input} ${classes.form_control}`}
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
            <label for="exampleInputEmail1">
              {" "}
              <strong>Email address </strong>{" "}
            </label>
            <input
              type="email"
              className={`form-control ${classes.input} ${classes.form_control}`}
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
            <label for="exampleInputPassword1">
              {" "}
              <strong>Your Phone </strong>{" "}
            </label>
            <input
              type="text"
              className={`form-control ${classes.input} ${classes.form_control}`}
              id="exampleInputPassword1"
              name="phone"
              required
              value={user.phone}
              onChange={getUserData}
              placeholder="Your Phone"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">
              <strong> Your Task Description</strong>
            </label>
            <textarea
              className={`form-control ${classes.input} ${classes.form_control}`}
              id="exampleInputPassword1"
              name="message"
              required
              value={user.message}
              onChange={getUserData}
              rows="7"
              placeholder="Your Task Description"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReactForm;
