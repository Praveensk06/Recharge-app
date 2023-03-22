import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Recharge from "./routes/recharge/Recharge";
import PostPaid from "./routes/recharge/PostPaid";
import NavLayout from "./routes/nav-layout/NavLayout";
import CreditCard from "./routes/recharge/CreditCard";
import Dth from "./routes/recharge/Dth";
import Electricity from "./routes/recharge/Electricity";
import FastTag from "./routes/recharge/FastTag";
import Cylinder from "./routes/recharge/Cylinder";
import LandLine from "./routes/recharge/LandLine";
import Gas from "./routes/recharge/Gas";
import Water from "./routes/recharge/Water";

const App = () => {
  return (
    // it define all the routes of the application
    <Routes>
      {/* route define a single route */}

      {/* nav-layout provides a consistent navigation */}
      {/* parent path true then home also came */}
      <Route path="/" element={<NavLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="cylinder" element={<Cylinder />} />
        <Route path="electricity" element={<Electricity />} />
        <Route path="fastTag" element={<FastTag />} />
        <Route path="dth" element={<Dth />} />
        <Route path="gas" element={<Gas />} />
        <Route path="landline" element={<LandLine />} />
        <Route path="mobile-postpaid" element={<PostPaid />} />
        <Route path="mobile-recharge" element={<Recharge />} />
        <Route path="rentVie" element={<CreditCard />} />
        <Route path="water" element={<Water />} />
      </Route>
    </Routes>
  );
};

export default App;
