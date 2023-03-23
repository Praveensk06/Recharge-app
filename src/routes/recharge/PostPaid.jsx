import React from "react";
import "./Recharge.css";
import { MdMobileFriendly } from "react-icons/md";

const PostPaid = () => {
  return (
    <>
      <div className="recharge-container">
        <div className="left-content">
          <div className="title-box">
            <MdMobileFriendly className="mobile-icon" />
            <div className="title">
              <p>Let's Get Your</p>
              <h5>PostPaid Done!</h5>
            </div>
          </div>
          {/* input container */}
          <form>
            <div className="form-group">
              <input type="number" placeholder="Enter Your Mobile Number" />
              <p>Please Enter Valid Mobile Number</p>
            </div>
            <div className="form-group">
              <input type="text" />
              <p>Please Select Valid Operator</p>
            </div>
            <div className="form-group">
              <input type="text" />
              <p>Please Valid Circle</p>
            </div>
            <button type="button" className="btn-submit">
              Next
            </button>
          </form>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="right-content">
          <img
            src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/mobile.svg"
            alt=""
            className="lady-img"
          />
        </div>
      </div>
    </>
  );
};

export default PostPaid;
