import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Parallax from "../../Parallax/Parallax";

export default function ServiceCard({ service }) {
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
    hidden: { x: service.hidden },
    visible: {
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Parallax>
      <motion.div
        className="service-card"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
        <Grid container>
          <Grid xs={6} item={true} className="services-grid">
            {service.imagePosition === "left" ? (
              <img src={service.image} alt={service.title} />
            ) : (
              <div className="service-card-text">
                <div className="service-id">
                  <p>#0{service.id}</p>
                </div>
                <div className="service-title">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            )}
          </Grid>
          <Grid xs={6} item={true} className="services-grid">
            {service.imagePosition === "right" ? (
              <img src={service.image} alt={service.title} />
            ) : (
              <div className="service-card-text">
                <div className="service-id">
                  <p>#0{service.id}</p>
                </div>
                <div className="service-title">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </motion.div>
    </Parallax>
  );
}
