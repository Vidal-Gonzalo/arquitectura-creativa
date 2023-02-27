import { Button, Grid } from "@mui/material";
import React from "react";
import presentationImage from "../../assets/presentationImage.png";
import "./Presentation.css";

export default function Presentation() {
  return (
    <section className="presentation">
      <Grid container sx={{ height: "100%" }}>
        <Grid xs={4} item={true}>
          <div className="presentation-text">
            <h1>
              Arquitectura <span>Creativa</span>
            </h1>
            <p>Construimos tu proyecto de una manera creativa</p>
            <div
              className="presentation-cta"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "3rem 0 0 3rem",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "50%",
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
                  borderRadius: "2rem",
                  ":hover": {
                    backgroundColor: "var(--global-secondary-color)",
                  },
                }}
              >
                Conversemos
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  backgroundColor: "transparent",
                  fontFamily: "var(--global-primary-font)",
                  border: "1px solid var(--global-tertiary-color)",
                  height: "3rem",
                  color: "var(--global-tertiary-color)",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                  textTransform: "capitalize",
                  borderRadius: "2rem",
                  ":hover": {
                    backgroundColor: "var(--global-secondary-color)",
                  },
                }}
              >
                Conoce{" "}
                <span style={{ textTransform: "lowercase" }}>&nbsp;más</span>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid xs={6} className="presentation-image-grid" item={true}>
          <div className="presentation-image">
            <img src={presentationImage} alt="Plans" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
