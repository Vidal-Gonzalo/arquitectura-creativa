import React from "react";
import execute from "../../assets/execute.jpg";
import design from "../../assets/design.jpg";
import plan from "../../assets/plan.jpg";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      image: plan,
      title: "Planificación",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, nisi quasi. Minus, officiis error, labore facilis obcaecati voluptas eum voluptatum molestiae repellat possimus omnis incidunt amet pariatur",
      imagePosition: "left",
      hidden: -800,
    },
    {
      id: 2,
      image: design,
      title: "Diseño",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, nisi quasi. Minus, officiis error, labore facilis obcaecati voluptas eum voluptatum molestiae repellat possimus omnis incidunt amet pariatur",
      imagePosition: "right",
      hidden: 800,
    },
    {
      id: 3,
      image: execute,
      title: "Ejecución",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, nisi quasi. Minus, officiis error, labore facilis obcaecati voluptas eum voluptatum molestiae repellat possimus omnis incidunt amet pariatur",
      imagePosition: "left",
      hidden: -800,
    },
  ];

  return (
    <>
      <section id="services">
        <div className="services-container">
          <div className="services-title">
            <h3>
              Nuestros <span>servicios</span>
            </h3>
          </div>
          <div className="services-list" style={{ overflow: "hidden" }}>
            {services.map((service, i) => (
              <ServiceCard service={service} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
