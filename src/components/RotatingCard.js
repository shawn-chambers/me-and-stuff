import { motion, useMotionValue, useTransform } from "framer-motion";

const RotatingCard = ({ img }) => {

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [10, -10]);
  const rotateY = useTransform(x, [0, 600], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }


  return (
    <motion.div
      className="rotatingcard"
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY
        }}
        className="rotatingcard-content"
      />
    </motion.div>
  )
}

export default RotatingCard;