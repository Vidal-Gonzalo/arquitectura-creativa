import { Button, Grid } from "@mui/material";
import React from "react";
import building from "../../assets/building.png";
import cartoon from "../../assets/cartoon.jpeg";
import construction from "../../assets/construction.png";
import "./About.css";

export default function About() {
  return (
    <section id="about-us">
      <div
        className="about-us-presentation"
        style={{ background: `url(${building}) no-repeat center/cover` }}
      >
        <h3>
          Conoce más <span>sobre nosotros</span>
        </h3>
      </div>
      <div className="about-us-content">
        <div className="first-content">
          <h5 className="item-title">Pasión por la arquitectura</h5>
          <div className="descriptions">
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit
              rem necessitatibus quisquam quas, eveniet esse ipsum veniam
              tenetur, velit possimus non asperiores temporibus. Iure cum
              corrupti quam cumque magnam!
            </p>{" "}
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit
              rem necessitatibus quisquam quas, eveniet esse ipsum veniam
              tenetur, velit possimus non asperiores temporibus. Iure cum
              corrupti quam cumque magnam!
            </p>
          </div>
        </div>
        <div className="second-content">
          <Grid container>
            <Grid item={true} xs={6}>
              <div className="item-image">
                <img src={cartoon} alt="" />
              </div>
            </Grid>
            <Grid
              item={true}
              xs={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="content" style={{ height: "70%" }}>
                <h6>- Nuestro foco</h6>
                <h5 className="item-title">Somos super creativos</h5>
                <p className="item-description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  sit rem necessitatibus quisquam quas, eveniet esse ipsum
                  veniam tenetur, velit possimus non asperiores temporibus. Iure
                  cum corrupti quam cumque magnam!
                </p>
                <Button
                  variant="contained"
                  sx={{
                    width: "90%",
                    backgroundColor: "var(--global-secondary-color)",
                    fontFamily: "var(--global-primary-font)",
                    border: "none",
                    height: "3rem",
                    color: "var(--global-tertiary-color)",
                    fontWeight: "bold",
                    transition: "500ms",
                    fontSize: "1.2rem",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    marginRight: "2rem",
                    ":hover": {
                      backgroundColor: "var(--global-secondary-color)",
                    },
                  }}
                >
                  Conversemos
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="third-content">
          <Grid container>
            <Grid
              item={true}
              xs={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <div className="content" style={{ height: "70%" }}>
                <h5 className="item-title">Nuestra misión</h5>
                <div className="item-content">
                  {" "}
                  <p className="item-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nemo sit rem necessitatibus quisquam quas, eveniet esse
                    ipsum veniam tenetur, velit possimus non asperiores
                    temporibus. Iure cum corrupti quam cumque magnam!
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item={true} xs={6}>
              <div
                className="item-image"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <img src={cartoon} alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="about-us-banner">
        <div
          className="about-us-image"
          style={{ background: `url(${construction}) no-repeat bottom/cover` }}
        ></div>
      </div>
    </section>
  );
}
