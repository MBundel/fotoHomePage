import { Link } from "react-router-dom";
import { UsualButton } from "../micromodules/Buttons";

//CSS
import "../../styles/endOfPage.css";

// icons
import { AiFillInstagram } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

function EndOfPage() {
  return (
    <>
      <div className="end__container">
        <div className="end__tile">
          <Link to="/">
            <ImHome className="end__icon" size={50} />
          </Link>
        </div>
        <div className="end__tile">
          <Link to="/Kontakt">
            <BsFillPhoneVibrateFill className="end__icon" size={50} />
          </Link>
        </div>
        <div className="end__tile">
          <a
            href="https://www.instagram.com/michel.bundel.fotografie/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="end__icon" size={55} />
          </a>
        </div>
      </div>
    </>
  );
}

export default EndOfPage;
