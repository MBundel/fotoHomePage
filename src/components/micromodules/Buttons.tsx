import React from "react";
import { Link } from "react-router-dom";
import "../../styles/buttons.css";

interface StandardButton {
  text: string;
  link: string;
  style: "primaryButton"| "fancyButton";
  size?: string;
}


export function UsualButton(props: StandardButton) {
  return (
    <>
    <Link to={props.link}>
      <button className={props.style}>{props.text}</button></Link>
    </>
  );
}



