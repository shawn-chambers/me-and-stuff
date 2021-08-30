import { motion, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { scrollY } = useViewportScroll();

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const display = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="about">
      <motion.div className="about-text"
        animate={inView ? 'visible' : 'hidden'}
        variants={display}
        ref={ref}
      >
        <motion.p>
          Hi, I’m Shawn, a full stack web developer living in the Sacramento area of California. Volutpat in interdum vulputate dui aliquet diam imperdiet accumsan egestas. Dibh ullamcorper faucibus arcu diam erat.
        </motion.p>
        <motion.p>
          Et mauris lacus et mi id metus. Sagittis tortor eget sit luctus cursus et iaculis amet fames. Id tempor adipiscing at nunc et. Gravida sit ultricies viverra pellentesque amet convallis platea. At nunc commodo rhoncus, habitant tortor, imperdiet pellentesque. Ut blandit nisl leo, volutpat elementum.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About;