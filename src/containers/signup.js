import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import getCredentials from "../helper/credentials";

import Header from "../components/Header";
import Loading from "../components/Loading";

function SignUp({ setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [about, setAbout] = useState("");

  const newUser = {
    username,
    fullName,
    email,
    password,
    profileImage,
    about,
  };

  function handleSignUpSubmit(e) {
    e.preventDefault();

    if (newUser.profileImage === "") {
      newUser.profileImage = "/users/user-1.jpg";
    }

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    fetch("/api/signup", fetchOptions)
      .then((res) => {
        // if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((resData) => {
        if (resData.error) throw new Error(`${resData.error.message}`);
        setCurrentUser(getCredentials(resData.jwtToken));
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.message.includes("E11000")) {
          err.message = "Username/email is already taken";
        }
        setError(err.message);
      });
  }

  return (
    <section className="section-user">
      <Header
        secondHeading="Register to Recipe Blog"
        subHeading="Become a member"
      />
      {error && (
        <section className="section-error">
          <p className="error">{error}</p>
        </section>
      )}
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container">
          <form
            className="form"
            onSubmit={(e) => {
              handleSignUpSubmit(e);
            }}
          >
            <div className="form__group">
              <label htmlFor="fullName" className="form__label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                id="fullName"
                className="form__input-text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="username" className="form__label">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                id="username"
                className="form__input-text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
                className="form__input-text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="profileImage" className="form__label">
                Profile Image URL
              </label>
              <input
                type="text"
                name="profileImage"
                placeholder="Enter URL of your profile image"
                id="profileImage"
                className="form__input-text"
                value={profileImage}
                onChange={(e) => {
                  setProfileImage(e.target.value);
                }}
              />
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                className="form__input-text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="about" className="form__label">
                About You
              </label>
              <textarea
                name="about"
                placeholder="Write something about you"
                id="about"
                className="form__input-text"
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              ></textarea>
            </div>
            <button className="btn btn--primary">Join Us</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default SignUp;
