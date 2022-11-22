import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "./responsive.css";

import background from "../../Assets/images/background.jpg";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../GlobalRedux/Features/auth/authSlice";
import { useLoginMutation } from "../../GlobalRedux/Features/auth/authApiSlice";

const Login = () => {
  const userRef = useRef();

  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/Todolist");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-login">
        <img
          src={background}
          className="left-login-background"
          alt="background"
        />
        <div className="forms-container">
          <div className="signin">
            <form action="#" className="sign-in-form">
              <h1 className="title">KRUNGSRI RECOVERY SYSTEM</h1>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  ref={userRef}
                  value={user}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handlePwdInput}
                  value={pwd}
                  required
                />
              </div>
              {isLoading === true ? (
                <button className="btn-login solid btn-login-loading">
                  <i className="fa fa-refresh fa-spin"></i> Loading
                </button>
              ) : (
                <input
                  type="button"
                  value="Login"
                  className="btn-login solid"
                  onClick={() => handleSubmit()}
                />
              )}
              <p className="social-text">
                © 2023 Bank of Ayudhya Public Company Limited.
              </p>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
