import React from "react";
import "./Recharge.css";

const Dth = () => {
  return (
    <>
      <div className="recharge-container">
        <div className="left-content">
          <div className="title-box">
            <div className="title">
              <p>Let's Get Your</p>
              <h5>DTH Bill done!</h5>
            </div>
          </div>
          {/* input container */}
          <form>
            <div className="form-group">
              <input type="number" placeholder="Enter Your Mobile Number" />
              <p>Please Enter Valid Mobile Number</p>
            </div>

            <button type="button" className="btn-submit">
              Next
            </button>
          </form>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="right-content">
          <img
            src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/dth.svg"
            alt=""
            className="lady-img"
          />
        </div>
      </div>
    </>
  );
};

export default Dth;
