import React from "react";
import "./education.css";
import { MdMobileFriendly } from "react-icons/md";


const Education = () => {
  return (
    <>
      <section>
        <div className="recharge-container">
          <div className="left-content">
            <div className="title-box">
              <MdMobileFriendly className="mobile-icon" />
              <div className="title">
                <p>Let's Get Your</p>
                <h5>Education Fees Done!</h5>
              </div>
            </div>
            {/* input container */}
            <form>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    Select State
                  </option>
                  <option value="option2">TamilNadu</option>

                  <option value="option3">Kerala</option>
                  <option value="option4">Karnataka</option>
                  <option value="option4">Andhra Pradesh</option>
                </select>
                <p>Select your State</p>
              </div>
              <div className="form-group">
                <select className="select" id="my-input">
                  <option value="option1" className="option">
                    City
                  </option>
                  <option value="option1" className="option">
                    Chennai
                  </option>
                  <option value="option1" className="option">
                    Coimbatore
                  </option>
                  <option value="option1" className="option">
                    Bangalore
                  </option>
                </select>
                <p>Select your City</p>
              </div>
              <button type="button" className="btn-submit">
                Next
              </button>
            </form>
          </div>
          {/* right container */}
          <div className="right-content">
            <img
              src="https://pwa-cdn.freecharge.in/pwa-static/pwa/images/dcc/education-fees.svg"
              alt=""
              className="lady-img"
            />
          </div>
        </div>
      </section>
      {/* description */}
      <section className="description">
        <h1>Make Online Fee Payment For School, Colleges & Tuition Fees</h1>
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
        <h1>Steps To Pay Online School Fees Payment</h1>
        <ul>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
          <li>First, go to the Freecharge application dashboard</li>
        </ul>
        <h1>
          Payment Options Available For Online Fee Payment Using Freecharge
        </h1>
        <p>
          The global pandemic situation has improved over the last few months. A
          lot of uncommon things are common nowadays. For example, a lot of our
          children are taking classes online nowadays, the schools and other
          institutions are relying on online methods for management sections as
          well. And just like the classes have shifted to online, paying their
          school fees has also shifted to online. You heard it right, now you
          can pay the school fees of your children online right from your home
        </p>
      </section>
    </>
  );
};

export default Education;
