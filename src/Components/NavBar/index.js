import React from "react";
import NavBar from "./NavBar";
import Krungsri2011Image from "../../Assets/images/krungsri2011.png";

const index = () => {
  return (
    <div class="container-fluid m-0 p-0">
      <div class="container-fluid d-none d-lg-block">
        <div class="row">
          <div class="col">
            <image
              id="imgProjectName"
              alt="header image"
              style={{ "max-height": "140px", "max-width": "338px" }}
              src={Krungsri2011Image}
            />
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default index;
