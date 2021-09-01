import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import useWindowDimensions from "../hooks/getWindowDimensions";


const Abilities = () => {

  const { scrollYProgress } = useViewportScroll();

  const { width, height } = useWindowDimensions();

  const { end, end2 } = width < 1400 ? { end: -18000, end2: -16500 } : { end: -19500, end2: -17750 }
  const move = useTransform(scrollYProgress, [0.09, 1], [0, end]);
  const move2 = useTransform(scrollYProgress, [0.089, 1], [2600, end2]);
  const hide = useTransform(scrollYProgress, [0.085, 0.085, .995, 1], [0, 1, 1, 0]);
  const transition = useTransform(scrollYProgress, [0.08, 0.15], [1, 0]);

  return (
    <>
      <Controller>
        <Scene
          triggerElement=".abilities"
          triggerHook={'onLeave'}
          duration={30000}
          pin={true}
        >
          <motion.section
            className="abilities"
          >
            <motion.div
              className="abilities-billboard"
              style={{ opacity: transition }}
            >
              {console.log(width, height)}
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
              style={{
                x: move2,
                opacity: hide,
                position: "absolute"
              }}
              className="list"
            >
              <motion.div className="hollow abilities-skill"
              >
                CLIENT SIDE
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                SERVER SIDE
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                DATABASES/ ORMs
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                TESTING
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                DEPLOYMENT
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                DEVELOPMENT TOOLS
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                ANIMATION/ VISUALIZATION
              </motion.div>
              <motion.div className="hollow abilities-skill"
              >
                DESIGN/ PROTOTYPING
              </motion.div>
            </motion.div>
          </motion.section>
        </Scene>
      </Controller>
    </>
  )
}

export default Abilities;