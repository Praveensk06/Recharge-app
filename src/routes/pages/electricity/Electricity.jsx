import React from "react";
import "./electricity.css";

const Electricity = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <div className="title">
                <p>Let's Get Your</p>
                <h5>Electricity Bill Payment Done!</h5>
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
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/operators/electricity.png"
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
                src="https://offers.freecharge.in/inappicons/electricity.png"
                alt=""
              />
              <h3 className="provider-name">Central Power Distribution</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/DELH00000DEL6Q.webp"
                alt=""
              />
              <h3 className="provider-name">Delhi Development Authority</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/SPDCLOB00ANP01.webp"
                alt=""
              />
              <h3 className="provider-name">Assam Power</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/THRI00000KER0H.webp"
                alt=""
              />
              <h3 className="provider-name">Thirissur Corporation-</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Electricity Main Category - Freecharge</h1>
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
        <h2>
          Step-By-Step Guide To Pay Electricity Bill Payment With Freecharge?
        </h2>
        <ul type="">
          <li>
            Launch the Freecharge app first, then look in the Recharge & Bill
            Payment section for "Electricity." To go to the following stage, tap
            Electricity.
          </li>
          <li>
            Launch the Freecharge app first, then look in the Recharge & Bill
            Payment section for "Electricity." To go to the following stage, tap
            Electricity.
          </li>
          <li>
            Launch the Freecharge app first, then look in the Recharge & Bill
            Payment section for "Electricity." To go to the following stage, tap
            Electricity.
          </li>
          <li>
            Launch the Freecharge app first, then look in the Recharge & Bill
            Payment section for "Electricity." To go to the following stage, tap
            Electricity.
          </li>
        </ul>
        <h3>STRATEGIC SUPPORT</h3>
        <p>
          STRATEGIC SUPPORT The electricity sector's 100% FDI permit has
          increased FDI influx. It is anticipated that programmes like the
          Integrated Power Development Scheme (IPDS) and Deen Dayal Upadhyay
          Gram Jyoti Yojana (DDUGJY) will increase electricity throughout the
          nation.
        </p>
        <h3>A LARGER INVESTMENT</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod
          praesentium dolorem aut, exercitationem, iste accusantium mollitia sit
          quaerat, earum et iure in doloremque voluptatum necessitatibus fugit
          voluptas corporis nihil?
        </p>
      </section>
    </>
  );
};

export default Electricity;
