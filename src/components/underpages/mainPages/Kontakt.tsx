import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// import css
import "../../../styles/main.css";

//import react icons
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function Kontakt() {
  //useState

  const [showCopy, setShowCopy] = useState(true);

  const handleClick = () => {
    setShowCopy(false);
    setTimeout(() => {
      setShowCopy(true);
    }, 1000); //1000 milisec = 1 sec
  };

  // HTML Code
  return (
    <>
      <img
        src="./img/Michel-Bundel-Fotografie-Hintergrund.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />

      <div className="sideblock">
        <motion.div
          animate={{ scale: 1, x: 0 }}
          initial={{ scale: 0, x: -300 }}
          transition={{ delay: 0.2, duration: 1, bounce: 3 }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/004917684415706?text=Moin,%20ich%20bin%20an%20einem%20Shooting%20interessiert!"
          >
            <RiWhatsappLine className="linkIcon" size={100} />
          </a>
        </motion.div>
        <motion.div
          animate={{ scale: 1, x: 0 }}
          initial={{ scale: 0, x: -300 }}
          transition={{ delay: 0.4, duration: 1, bounce: 3 }}
        >
          <a rel="noreferrer" href="tel:+4944121213023">
            <AiOutlinePhone className="linkIcon" size={100} />
          </a>
        </motion.div>
        <motion.div
          animate={{ scale: 1, x: 0 }}
          initial={{ scale: 0, x: -300 }}
          transition={{ delay: 0.6, duration: 1, bounce: 3 }}
        >
          <a
            rel="noreferrer"
            href="mailto:michel@bundel.eu?subject=Fotoshooting&body=Mail%20dauern%20etwas!%20Ruf%20doch%20an%20oder%20schreib%20'ne%20WhatsApp:%20017684415706"
          >
            <GrMail className="linkIcon" size={100} />
          </a>
        </motion.div>
        <motion.div
          animate={{ scale: 1, x: 0 ,y: 0}}
          initial={{ scale: 0.25, y: 300 }}
          transition={{ delay: 0.5, duration: 0.1 }}
          className="infobox"
          onClick={() => {
            navigator.clipboard.writeText("017684415706");
            console.log("hallo");
            handleClick();
          }}
        >
          <div className="infobox__content">
            {showCopy ? (
              <h3>
                0
                <CountUp end={176} delay={1} duration={2} />{" "}
                <CountUp end={844} delay={1} duration={2} />{" "}
                <CountUp end={157} delay={1} duration={1.5} /> 0
                <CountUp end={6} delay={1} duration={1.5} />
              </h3>
            ) : (
              <h3>Nummer kopiert</h3>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Kontakt;
