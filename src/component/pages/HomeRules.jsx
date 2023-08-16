import React from "react";
import './HomeRules.scss'

const HomeRules = () => {
  return (
    <>
      <div className="custom-modal-text modal-body">
        <h2> प्रिय ग्राहक,</h2>
        <p>
          {" "}
          आपसे अनुरोध है हमारी कोई डुप्लीकेट साइट नही है हमारी आधिकारिक साइट
          {" '"}{window.location.hostname}{"' "} से लॉगिन करें। लॉगइन करने से पहले
          साइट का नाम जरूर देख लें। आपके समर्थन के लिए धन्यवाद। टीम {" '"}{window.location.hostname}{"' "}
        </p>
        <h2>Dear Client,</h2>
        <p>
          {" "}
          We don't have any duplicate site , You are requested to login with our
          official site {" '"}{window.location.hostname}{"' "}.I only. Please check the
          site name before you login. Thanks for your support. Team {" '"}{window.location.hostname}{"' "}
        </p>
      </div>
    </>
  );
};

export default HomeRules;
