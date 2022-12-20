import { Link } from "react-router-dom";
// CSS

import "../../styles/tiles.css";

interface Tile {
  header: string;
  imgSrc: string;
  link: string;
}

function Tile(props: Tile) {
  return (
    <Link to={props.link}>
      <div className="tile">
        <div className="tile__content">
          <img src={props.imgSrc} alt="" className="tile__img" />
          <h4 className="tile__text"> </h4>
          <h4 className="tile__text"> {props.header}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Tile;
