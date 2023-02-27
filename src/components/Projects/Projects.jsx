import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import mundoCartoon from "../../assets/mundoCartoon.png";
import volta from "../../assets/volta.jpg";
import isladelafantasia from "../../assets/isladelafantasia.jpg";
import procrear from "../../assets/procrear.jpg";
import newyorkdeli from "../../assets/newyorkdeli.jpeg";
import paindujour from "../../assets/paindujour.jpeg";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mundo Cartoon Network",
      logo: mundoCartoon,
      images: [],
      description: "",
    },
    { id: 2, title: "Volta", logo: volta, images: [], description: "" },
    {
      id: 3,
      title: "Isla de la fantasía",
      logo: isladelafantasia,
      images: [],
      description: "",
    },
    {
      id: 4,
      title: "Plan procrear",
      logo: procrear,
      images: [],
      description: "",
    },
    {
      id: 5,
      title: "Plan procrear",
      logo: newyorkdeli,
      images: [],
      description: "",
    },
    {
      id: 6,
      title: "Pain Du Jour",
      logo: paindujour,
      images: [],
      description: "",
    },
  ];
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-title">
          <h3>
            Nuestros <span>trabajos</span>
          </h3>
        </div>
        <div className="projects-list">
          <Grid container>
            {projects.map((project, index) => (
              <Grid key={index} xs={4} item={true} className="projects-grid">
                <ProjectCard key={index} project={project} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}
