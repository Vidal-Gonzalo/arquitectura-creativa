import React, { useEffect } from "react";
import Parallax from "../../Parallax/Parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      <img src={project.logo} alt={project.title} />
    </motion.div>
  );
}
