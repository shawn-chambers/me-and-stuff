import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import useRefScrollProgress from "../hooks/useRefScrollProgress";
import useWindowDimensions from '../hooks/getWindowDimensions';


const Abilities = () => {

  const { scrollYProgress } = useViewportScroll();

  const ghostRef = useRef(null);
  const { start, end } = useRefScrollProgress(ghostRef);

  const { width } = useWindowDimensions();


  // const move = useTransform(scrollYProgress, [start, 1], [0, -10400]);
  // const move2 = useTransform(scrollYProgress, [start, 1], [-11100, -28400]);
  const move = useTransform(scrollYProgress, [0.09, 1], [0, -11200]);
  // const move2 = useTransform(scrollYProgress, [0.08, 1], [-11100, -28400]);
  const move2 = useTransform(scrollYProgress, [0.09, 1], [-14000, -26000]);
  const hide = useTransform(scrollYProgress, [0.085, 0.085, .995, 1], [0, 1, 1, 0]);
  const transition = useTransform(scrollYProgress, [0.08, 0.1], [1, 0]);

  return (
    <>
      <Controller>
        <Scene
          triggerElement=".abilities"
          triggerHook={'onLeave'}
          duration={19000}
          pin={true}
        >
          <motion.section
            className="abilities"
          >
            {console.log(width)}
            <motion.div
              className="abilities-billboard"
              style={{ opacity: transition }}
            >
              <motion.div
                className="abilities-billboard-title"
              >
                <span
                  className="glitch"
                  data-text="TECHNICAL"
                >
                  TECHNICAL
                </span>
                <span
                  className="glitch another"
                  data-text="SKILLS"
                >
                  SKILLS
                </span>
              </motion.div>
              <motion.div className="abilities-billboard-sub">
                a list of my proficiencies and some tools I've worked with
              </motion.div>
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              JavaScript (TypeScript, ES5+), HTML5, CSS3, SASS/SCSS, React, Redux, jQuery, Styled-Components, Emotion
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              Node.js, Express, RESTful API Development (AJAX, AXIOS, Fetch API, etc)
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              MySQL, PostgreSQL, SQLite, Cassandra, MongoDB, MongooseJS, Sequelize, Knex.js
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              Mocha, Chai, Jest, Enzyme, React-testing-library, Jasmine, Loader io, New Relic
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              AWS (EC2/ECS, S3), Docker, Heroku, Netlify
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              Git, Webpack, Babel, NPM, Yarn
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              D3.js, Chart.js, Framer Motion, GSAP, ScrollMagic
            </motion.div>
            <motion.div className="abilities-list"
              style={{ x: move }}
            >
              Adobe Creative Suites (Illustrator, Photoshop), Figma, Sketch, GIMP
            </motion.div>
            <motion.div
              style={{ x: move2, opacity: hide }}
              className="list"
            >
              <motion.div className="hollow abilities-skill">
                CLIENT SIDE
              </motion.div>
              <motion.div className="hollow abilities-skill">
                SERVER SIDE
              </motion.div>
              <motion.div className="hollow abilities-skill">
                DATABASES/ ORMs
              </motion.div>
              <motion.div className="hollow abilities-skill">
                TESTING
              </motion.div>
              <motion.div className="hollow abilities-skill">
                DEPLOYMENT
              </motion.div>
              <motion.div className="hollow abilities-skill">
                DEVELOPMENT TOOLS
              </motion.div>
              <motion.div className="hollow abilities-skill">
                ANIMATION/ VISUALIZATION
              </motion.div>
              <motion.div className="hollow abilities-skill">
                DESIGN/ PROTOTYPING
              </motion.div>
            </motion.div>
            <div className="ghost" ref={ghostRef}></div>
          </motion.section>
        </Scene>
      </Controller>
    </>
  )
}

export default Abilities;