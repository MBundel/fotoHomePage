import { FaBeer } from "react-icons/fa";

import PortfolioData from "../../DataStore/PortfolioData";
import TestArray from "../../DataStore/TestArray";
import FilterCheckboxBar from "../../macromodules/FilterCheckboxBar";

// my list of shootings
const shooting = [
  {
    name: "John & Johna ",
    tag: ["wedding", "couple"],
    img: ["src1", "src2", "..."], //irrelevant
  },
  {
    name: "Mario & Marie",
    tag: ["couple", "NSFW"],
    img: ["src1", "src2", "..."], //irrelevant
  },
];

//extract tags to new array
const tags = [...new Set(shooting.map(({ tag }) => tag).flat(1))];
//  result: tags = ['wedding', 'couple', 'NSWF']



function Test() {

  // HTML code
  return (
    <div className="centerblock">
      <div className="centerblock__content">
      
  {/* jo  */}
      </div>
    </div>
  );
}

export default Test;
