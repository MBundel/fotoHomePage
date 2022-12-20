import React from "react";
import { UsualButton } from "../../micromodules/Buttons";

// import css
import "../../../styles/main.css";

function Home() {
  return (
    <div className="">
      <img
        src="./img/Michel-Bundel-Fotografie-Hintergrund.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="sideblock">
        <div className="sidetext">
          <h1>Impressum</h1>
        </div>
        <p>
          Michel Bundel <br />
          Sportweg 27 <br />
          26129 Oldenburg <br />
          <br />
          0176 844 157 06 <br />
          michel@bundel.eu
        </p>
        <UsualButton style="fancyButton" text="shoot me!" link="/Kontakt" />
      </div>
    </div>
  );
}

export default Home;
