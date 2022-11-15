import React from "react";
import "./main.css";
import "./responsive.css";
import background from "../../Assets/images/background.jpg";

const Login = () => {
  return (
    <>
      <div class="container">
        <img src={background} class="left_login_background" alt="background" />
        <div class="forms-container">
          <div class="signin">
            <form action="#" class="sign-in-form">
              <h1 class="title">KRUNGSRI RECOVERY SYSTEM</h1>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="button" value="Login" class="btn solid" />
              <p class="social-text">
                © 2023 Bank of Ayudhya Public Company Limited.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
