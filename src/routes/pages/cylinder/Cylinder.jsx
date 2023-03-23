import React from "react";
import "./cylinder.css";

const Cylinder = () => {
  return (
    <>
      <section>
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
                <input type="number" placeholder="Enter Your Dish Number" />
                <p>Please Enter Valid DTH Id</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* RIGHT CONTAINER */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/operators/gas.png"
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
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/INDI00000NAT26.webp"
                alt=""
              />
              <h3 className="provider-name">Indian Gas</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/home/pipe_gas.png"
                alt=""
              />
              <h3 className="provider-name">HPCL PNG</h3>
            </li>
            <li className="provider-item">
              <img
                src="https://dmx246cm6p7k8.cloudfront.net/content/images/circular-operator-logos/bills/INDRAPGASDEL02.webp"
                alt=""
              />
              <h3 className="provider-name">Adani Gas</h3>
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
        <h2>How To Book LPG Gas Online On Freecharge?</h2>
        <p>
          To book LPG gas cylinder online, you can use the Freecharge app and
          follow the steps mentioned below. 1. Tap Book a Cylinder in the New
          Payments section in Freecharge App (Android only) 2. Select your gas
          provider. 3. Enter your registered mobile number. 4. Now, the amount
          to be paid will be fetched. 5. Select the payment mode and tap Make
          Payment. Upon successful payment, you will receive a BBPS reference
          no. on your screen. You can use this BBPS reference no. to track your
          booking or contact your agency for resolving delivery related queries.
        </p>
      </section>
    </>
  );
};

export default Cylinder;
