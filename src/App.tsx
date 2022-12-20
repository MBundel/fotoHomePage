import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//import Pages
import Home               from "./components/underpages/mainPages/Home";
import Kontakt            from "./components/underpages/mainPages/Kontakt";
import FAQ                from "./components/underpages/mainPages/FAQ";
import Instagram          from "./components/underpages/mainPages/Instagram";
import Impressum          from "./components/underpages/mainPages/Impressum";
import Portfolio          from "./components/underpages/mainPages/Portfolio";
import WieGehtAkt         from "./components/underpages/FAQ/WieGehtAkt";
import Fototipps          from "./components/underpages/FAQ/Fototipps";
import Fehler             from "./components/underpages/other/Fehler";
import Test               from "./components/underpages/other/Test";
import AllgemeineFAQ      from "./components/underpages/FAQ/AllgemeineFAQ";

import { SingleShooting } from "./components/underpages/portfolio/SingleShooting";


// import homepage modules
import Navbar from "./components/macromodules/Navbar"; 



function App() {



  //HTML CODE
  return (
    <>
      
        <Navbar />
        <Routes >
          <Route path="/"                           element={<Home           />} />
          <Route path="Kontakt"                     element={<Kontakt        />} />
          <Route path="FAQ"                         element={<FAQ            />} />
          <Route path="Instagram"                   element={<Instagram      />} />
          <Route path="Impressum"                   element={<Impressum      />} />          
          <Route path="WieGehtAkt"                  element={<WieGehtAkt     />} />
          <Route path="Fototipps"                   element={<Fototipps      />} />
          <Route path="*"                           element={<Fehler         />} />
          <Route path="Test"                        element={<Test           />} />
          <Route path="AllgemeineFAQ"               element={<AllgemeineFAQ  />} />
          <Route path="Portfolio"                   element={<Portfolio      />} />
          <Route path="Portfolio/:portfolioId"      element={<SingleShooting />} />
        </Routes>
      
    </>
  );
}

export default App;
