import React from "react";
import "./landline.css";

const LandLine = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <div className="title">
                <p>Let's Get Your</p>
                <h5>Water Bill Payment Done!</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter Your Provider" />
                <p>Please Enter Provider</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* RIGHT CONTAINER */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/operators/landline.png"
              alt=""
              className="lady-img"
            />
          </div>
        </div>
      </section>
      {/* provider  */}
      <section>
        <div className="provider-container">
          <ul className="provider-list">
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/ATPOST000NAT02.webp"
                alt=""
              />
              <h3 className="provider-name">Airtel Landline</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/BSNLMOB00NAT01.webp"
                alt=""
              />
              <h3 className="provider-name">BSNL Landline</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/ATPOST000NAT02.webp"
                alt=""
              />
              <h3 className="provider-name">MTNL Mumbai</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Online DTH Recharge For All DTH Operators With Freecharge</h1>
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
      </section>
    </>
  );
};

export default LandLine;