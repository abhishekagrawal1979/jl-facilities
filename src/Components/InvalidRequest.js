import React from "react";

const invalidRequest = () => {
  return (
    <div class="formContainer">
       <img
        src={require("../../src/Assets/Images/error-logo1.gif")}
        width="250px"
        alt="John Lewis Facilities"/>
      <p className="pError"> Please scan a valid QR code to submit request or report an issue.</p>
    </div>
  );
};

export default invalidRequest;
