import { Link, useParams } from "react-router-dom";
import PortfolioData from "../../DataStore/PortfolioData";
import { UsualButton } from "../../components/micromodules/Buttons";

import "../../styles/singleShooting.css";

export const SingleShooting = () => {
  const { portfolioId } = useParams();
  const portfolio = PortfolioData.find(
    (PortfolioData) => PortfolioData.id === portfolioId
  );
  const { id, name, location, mainImg, imgLib, text } = portfolio!;

  return (
    <div key={PortfolioData.toString()}>
      <img
        src={mainImg}
        alt="Michel Bundel Fotografie"
        className="backgroundIMG imgDarken"
      />
      jo <br />
      jo <br />
      jo <br />
      <div className="singleShooting__main">
        <h1>Shooting mit {name}</h1>
        <div className="singleShooting__imgLib">
          <div className="portfolioImg__Container">
            <img className="portfolioImgs" src={mainImg} alt="" />
          </div>

          {imgLib.map((imgLib) => {
            return (
              <div className="portfolioImg__Container">
                <img className="portfolioImgs" src={imgLib} alt="" />
              </div>
            );
          })}
        </div>

        <Link to="/Portfolio">
          <UsualButton link="/Portfolio" text="Zurück" style="primaryButton" />
        </Link>
      </div>
    </div>
  );
};
