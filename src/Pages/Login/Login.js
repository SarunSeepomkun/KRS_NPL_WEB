import React, { useState, createRef } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "./responsive.css";
import background from "../../Assets/images/background.jpg";
import { Login as Login_API } from "../../API/Authentication/authen";

const Login = () => {
  let navigate = useNavigate();
  const txtUsername = createRef();
  const txtPassword = createRef();

  const [isLoading, setIsLoading] = useState(false);

  function Login_Click() {
    setIsLoading(true);

    //if (txtUsername.target.value !== "" && txtPassword.target.value !== "") {
    // const result = await Login_API();

    // if(result?.data?.token)
    // {
    //   //Passed
    //    navigate("/Todolist");
    // }
    // else
    // {
    //   //Failed
    // }

    setInterval(() => {
      navigate("/Todolist");
    }, 2000);

    //}
  }

  return (
    <div className="container-login">
      <img
        src={background}
        classNameName="left-login-background"
        alt="background"
      />
      <div className="forms-container">
        <div className="signin">
          <form action="#" className="sign-in-form">
            <h1 className="title">KRUNGSRI RECOVERY SYSTEM</h1>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" ref={txtUsername} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" ref={txtPassword} />
            </div>
            {isLoading === true ? (
              <button className="btn solid btn-login-loading">
                <i className="fa fa-refresh fa-spin"></i> Loading
              </button>
            ) : (
              <input
                type="button"
                value="Login"
                className="btn solid"
                onClick={() => Login_Click()}
              />
            )}
            <p className="social-text">
              © 2023 Bank of Ayudhya Public Company Limited.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
