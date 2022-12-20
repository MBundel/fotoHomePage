
import Tile from "../../components/macromodules/Tile";
import * as MainArrays from "../../DataStore/TilesArray";
// import css
import "../../styles/main.css";

const wList = ["er", "ie", "as", "ieso", "eshalb", "arum"];

const tileList = MainArrays.TileMainMap;

function FAQ() {
  return (
    <>
      <img
        src="./img/HintergrundPilz.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="centerblock">
        <div className="centerblock__animation">
          <p className="centerblock__animation__text">W</p>

          <ul className="centerblock__animation__list">
            {wList.map((questions) => (
              <li
                className="centerblock__animation__list__item"
                key={questions.toString()}
              >
                {questions}?
              </li>
            ))}
          </ul>
          <h1>FAQ</h1>
        </div>
        <div className="centerblock__content">
          {tileList.map((tiles) => (
            <Tile
              key={tiles.id}
              header={tiles.header}
              imgSrc={tiles.imgSrc}
              link={tiles.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
