import React from "react";

import { UsualButton } from "../micromodules/Buttons";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <UsualButton style="primaryButton" link="/"           text="Home" />
        <UsualButton style="primaryButton" link="/Portfolio"  text="Portfolio" />
        <UsualButton style="primaryButton" link="/Instagram"  text="Instagram" />
        <UsualButton style="primaryButton" link="/Kontakt"    text="Kontakt" />
        <UsualButton style="primaryButton" link="/FAQ"        text="FAQ" />
      </div>
    </>
  );
}

export default Navbar;
