import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState, useRef } from "react";
import BillBoardSquiggle from "../components/BillboardSquiggle"
import useRefScrollProgress from "../hooks/useRefScrollProgress";

const Billboard = () => {
  const { scrollYProgress } = useViewportScroll();

  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false);
  const handleMouse = () => {
    setHover(prev => !prev);
  }

  const sectionRef = useRef(null);
  const { start, end } = useRefScrollProgress(sectionRef);

  const moveLeft = useTransform(scrollYProgress, [start, end], [0, -1500]);
  const moveRight = useTransform(scrollYProgress, [start, end], [0, 1500]);
  const hide = useTransform(scrollYProgress, [start, end/2], [1, 0]);

  return (
    <section className="billboard"
      ref={sectionRef}
    >
      <div className="billboard-header-main hollow">
        <motion.h1
          className="first"
          style={{
            x: moveRight
          }}
          data-text='SHAWN'
        >SHAWN</motion.h1>
        <motion.h1
          className="second"
          style={{
            x: moveLeft
          }}
          data-text='CHAMBERS'
        >CHAMBERS</motion.h1>
      </div>
      <div className="billboard-header-sub">
        <div className="scroll">
          <div className="scroll-marquee">
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className="glitch"
              // className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
          </div>
        </div>
      </div>
      <motion.div className="billboard-squiggle">
        <BillBoardSquiggle height={200} pl={hide} />
      </motion.div>
    </section>
  )
}

export default Billboard;