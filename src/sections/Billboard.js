import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import BillBoardSquiggle from "../components/BillboardSquiggle"

const Billboard = () => {
  const { scrollYProgress } = useViewportScroll();

  const [hover, setHover] = useState(false);
  const handleMouse = () => {
    setHover(prev => !prev);
  }

  const moveLeft = useTransform(scrollYProgress, [0, .45], [0, -2000]);
  const moveRight = useTransform(scrollYProgress, [0, .45], [0, 2000]);
  const hide = useTransform(scrollYProgress, [0, .35], [1, 0]);

  return (
    <section className="billboard">
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
              className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className={hover ? 'glitch' : ''}
              data-text="FULLSTACK ENGINEER"
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
            >
              FULLSTACK ENGINEER
            </p>
            <p
              className={hover ? 'glitch' : ''}
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