import React from "react";
import "./recharge.css";

import { MdMobileFriendly } from "react-icons/md";

const Recharge = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <MdMobileFriendly className="mobile-icon" />
              <div className="title">
                <p>Let's Get Your</p>
                <h5>Mobile Recharge Done!</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input type="number" placeholder="Enter Your Mobile Number" />
                <p>Please Enter Valid Mobile Number</p>
              </div>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    Postpaid
                  </option>
                  <option value="option2">Prepaid</option>
                </select>
                <p>Select your plan</p>
              </div>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    Airtel
                  </option>
                  <option value="option1" className="option">
                    jio
                  </option>
                  <option value="option1" className="option">
                    vodafone
                  </option>
                  <option value="option1" className="option">
                    Bsnl
                  </option>
                </select>
                <p>Please select valid operator</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* right container */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/mobile.svg"
              alt=""
              className="lady-img"
            />
          </div>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>
          Easy And Convenient Mobile Recharge For All Operators In India On
          Freecharge
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          labore magnam ab recusandae laborum accusamus iusto culpa qui,
          voluptates explicabo quisquam ratione debitis sequi doloremque
          laudantium mollitia beatae ad vitae, voluptas aperiam cum veniam enim.
          Tempore natus eius aspernatur perferendis esse possimus voluptates
          totam, quis sunt omnis labore vel, harum consectetur aliquid illo
          doloribus? Doloremque, eius. Quam, beatae rerum magnam consequuntur
          doloremque architecto, consectetur voluptatem quasi obcaecati
          accusamus quaerat aspernatur qui blanditiis fugiat repellat hic iste
          adipisci dolorem sed. Dolore iure repudiandae odit voluptatem velit
          voluptatibus tempora itaque consectetur facere ad obcaecati hic, dolor
          illo at reiciendis aut? Dolorem, error.
        </p>
        <h1>Some Of The Common Types Of Mobile Recharge Plans Include:</h1>
        <ol type="1">
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
          <li>
            Talktime Plans: Offer a fixed amount of talk time or calling
            minutes, without any data benefits.
          </li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit neque aut perferendis consectetur doloribus! Ea, aliquid cupiditate ipsum veritatis id exercitationem quidem molestiae repudiandae quia qui doloremque maiores culpa, debitis obcaecati. Voluptas exercitationem quae, cum similique maiores voluptatem dolor suscipit, aspernatur velit doloremque doloribus accusantium placeat quibusdam quas, libero ex qui eveniet? Quis dignissimos asperiores aperiam reiciendis facilis voluptatem ipsum iste earum exercitationem sequi fugiat cumque, velit ratione atque provident, in architecto ut, et explicabo eius nesciunt cum quos mollitia officia? Reprehenderit vitae ab sapiente consequuntur amet quae pariatur sunt saepe temporibus? Dicta voluptatibus minima totam reiciendis perferendis assumenda!
        </p>
      </section>
    </>
  );
};

export default Recharge;
