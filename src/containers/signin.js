import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import getCredentials from "../helper/credentials";

import Header from "../components/Header";
import Loading from "../components/Loading";

function SignIn({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSignInForm(e) {
    e.preventDefault();

    const signInUser = {
      email,
      password,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInUser),
    };

    fetch("/api/signin", fetchOptions)
      .then((res) => {
        // if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((resData) => {
        if (resData.error) throw new Error(`${resData.error.message}`);
        setIsLoading(false);
        setCurrentUser(getCredentials(resData.jwtToken));
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }
  return (
    <section className="section-user">
      <Header
        secondHeading="Welcome Back"
        subHeading="Please Sign In to proceed"
      />
      {error && (
        <section className="section-error">
          <p className="error">{error}</p>
        </section>
      )}
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container">
          <form className="form" onSubmit={(e) => handleSignInForm(e)}>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                className="form__input-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn--primary">Sign In</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default SignIn;
