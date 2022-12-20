import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//import Pages
import Home from "./pages/mainPages/Home";
import Kontakt from "./pages/mainPages/Kontakt";
import FAQ from "./pages/mainPages/FAQ";
import Instagram from "./pages/mainPages/Instagram";
import Impressum from "./pages/mainPages/Impressum";
import Portfolio from "./pages/mainPages/Portfolio";
import WieGehtAkt from "./pages/underPagesFAQ/WieGehtAkt";
import Fototipps from "./pages/underPagesFAQ/Fototipps";
import Fehler from "./pages/other/Fehler";
import Test from "./pages/other/Test";
import AllgemeineFAQ from "./pages/underPagesFAQ/AllgemeineFAQ";

import { SingleShooting } from "./pages/underPagesPortfolio/SingleShooting";

// import homepage modules
import Navbar from "./components/macromodules/Navbar";

function App() {
  //HTML CODE
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Kontakt" element={<Kontakt />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Instagram" element={<Instagram />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="WieGehtAkt" element={<WieGehtAkt />} />
        <Route path="Fototipps" element={<Fototipps />} />
        <Route path="*" element={<Fehler />} />
        <Route path="Test" element={<Test />} />
        <Route path="AllgemeineFAQ" element={<AllgemeineFAQ />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Portfolio/:portfolioId" element={<SingleShooting />} />
      </Routes>
    </>
  );
}

export default App;
