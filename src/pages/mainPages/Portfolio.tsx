import Tile from "../../components/macromodules/Tile";

import PortfolioData from "../../DataStore/PortfolioData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import css
import "../../styles/main.css";
import FilterCheckboxBar from "../../components/macromodules/FilterCheckboxBar";
import EndOfPage from "../../components/macromodules/EndOfPage";

// filtered tags for checkboxes tag
const tags = [...new Set(PortfolioData.map(({ tag }) => tag).flat(1))];

function Portfolio() {
  const [filteredTags, setFilteredTags] = useState<
    Record<string, boolean | undefined>
  >({});

  return (
    <>
      <img
        src="./img/HintergrundPilz.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="centerblock">
        <div className="centerblock__animation">
          <h1>Portfolio</h1>
        </div>
        <FilterCheckboxBar
          filteredTags={tags}
          sendFilteredValues={(filteredTags: any) =>
            setFilteredTags(filteredTags)
          }
        />

        <div className="centerblock__content">
          {PortfolioData.filter((collection) => {
            console.log("___");
            console.log(collection);
            return collection.tag.some((tag) => {
              console.log(tag);
              return filteredTags[tag];
            });
          }).map((PortfolioData) => {
            return (
              <AnimatePresence>
                <motion.div
                  layout
                  animate={{ scale: 1, x: 0 }}
                  initial={{ scale: 0, x: 100 }}
                  exit={{ scale: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  <Tile
                    key={PortfolioData.id}
                    header={PortfolioData.id}
                    imgSrc={PortfolioData.mainImg}
                    link={PortfolioData.id}
                  />
                </motion.div>{" "}
              </AnimatePresence>
            );
          })}
        </div>
        <EndOfPage />
      </div>
    </>
  );
}

export default Portfolio;
