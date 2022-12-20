import React from "react";
import { UsualButton } from "../../micromodules/Buttons";

// import css
import "../../../styles/main.css";

function Home() {
  return (
    <>
      <img
        src="./img/Michel-Bundel-Fotografie-Hintergrund.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="sideblock">
        <div className="sidetext">
          <h1>Fotograf in Oldenburg (Oldb)</h1>
        </div>
        <p>
          Moin! Ich bin Michel und fotografiere in Oldenburg und Umgebung - für
          weiter Weg bin ich auch zu haben. <br />
          Mein Portfolio streckt sich von Events, über Hochzeiten, Paarshooting,
          Bewebrungsfotos, Akt und Tierfotografie. Bei besonderen Anlässen
          schieß ich gerne die Bilder aus dem "Hinterhalt", da so die Atmosphäre
          und Emotionen am natürlichsten abgebildet werden. Bist du an einem
          Shooting interessiert, dann klick auf den gelben Button!
        </p>
        <UsualButton
         text="shoot me!" 
         link="/Kontakt" 
         style="fancyButton"
         />
        <p>
          Kennst du mich noch nicht, dann schau dich hier einfach mal um :). Am
          besten bin ich per WhatsApp zu erreichen, Instagram oder Mails lasse
          ich dann doch manchmal einige Tage liegen. Ich mache Pauschalpreise,
          die das Shooting, die Nachbearbeitung und Versendung der Bilder in
          höchster Auflösung allesamt inkludiert. Falls deine Bilder mal
          abhanden kommen sollten, habe ich auch dafür ein Backup. Eine Auswahl
          an Fotos findest du in meinem Portfolio und auf Instagram.
          Vorbereitung für ein Shooting und häufiggestellte Fragen kannst du bei
          den FAQs nachlesen.
        </p>
        <UsualButton style="primaryButton" link="/Portfolio" text="Portfolio" />
        <UsualButton style="primaryButton" link="/Instagram" text="Instagram" />
        <UsualButton style="primaryButton" link="/FAQ" text="FAQ" />
        <UsualButton style="primaryButton" link="/Impressum" text="Impressum" />
      </div>
    </>
  );
}

export default Home;
