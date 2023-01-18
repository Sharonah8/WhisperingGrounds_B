import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Feedback.css";

function Feedback() {
  const [formData, setValue] = useState({
    comment: "",
    name: "",
    photo_url: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setValue('')
      });

    let form = document.querySelector("form");
    let p = document.createElement("p");
    document.getElementById("feedback").append(p);
    p.style.fontFamily = "'Poppins', sans-serif";
    p.style.fontSize = "40px";
    p.innerText = "Thank you for your feedback. Hope to see you back!!!.";
    document.querySelector("#feedback").querySelector("h2").remove();
    form.remove();
    document.getElementById("feedback").style.height = "400px";
  }
  function handleChange(e) {
    setValue((previouState) => {
      return { ...previouState, [e.target.id]: e.target.value };
    });
  }
  //console.log(formData)
  return (
    <div id="feedback">
      {/* <h1>Hope you had an awesome stay with us</h1>
            <h2>You can fill the form below to tell us about your experience</h2> */}
      <div className="cont3">
        <form onSubmit={handleSubmit}>
          {/* <label id='comm' htmlFor="comment">Comment:</label> */}
          Comment:
          <textarea
            required
            name="Comment"
            id="comment"
            cols="0"
            rows="0"
            placeholder="write your comments here about this potrait..."
            onChange={handleChange}
            value={formData.comment}
          ></textarea>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            required
            type="text"
            name="Name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter name"
            maxLength={20}
          />
          <br /> <br />
          <label htmlFor="photo_url">Your photo url:</label>
          <input
            required
            type="text"
            name="image_url"
            id="photo_url"
            onChange={handleChange}
            value={formData.photo_url}
            placeholder="Enter photo_url"
          />{" "}
          <br />
          {/* <Link to={"/"}> */}
            <input type="submit" id="submit1" />
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Feedback;
