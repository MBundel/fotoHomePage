import React from "react";
import { UsualButton } from "../../micromodules/Buttons";
import * as GeneralQuestions from "../../DataStore/GeneralQuestions";

// import css
import "../../../styles/main.css";



const questionsAndAnswers = GeneralQuestions.generalQuestions;

function AllgemeineFAQ() {
  return (
    <>
      <img
        src="./img/Michel-Bundel-Fotografie-Hintergrund.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="sideblock sideblock__text">
        <div className="sidetext">
          <h1>Allgemeine Fragen</h1>
        </div>
        {questionsAndAnswers.map((qAa) => (
             <div  key={qAa.id}>
             <h3>{qAa.questions}</h3>
             <p>{qAa.answer}</p></div>
            ))}
          <br />
        <UsualButton style="fancyButton" text="shoot me!" link="/Kontakt" />
        <UsualButton style="primaryButton" link="/FAQ" text="FAQ" />
      </div>
    </>
  );
}

export default AllgemeineFAQ;
