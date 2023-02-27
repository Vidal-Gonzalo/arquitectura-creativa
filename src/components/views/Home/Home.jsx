import React from "react";
import About from "../../About/About";
import Presentation from "../../Presentation/Presentation";
import Projects from "../../Projects/Projects";
import Services from "../../Services/Services";
import Testimonials from "../../Testimonials/Testimonials";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <Presentation />
      <Services />
      <Projects />
      <Testimonials />
      <About />
    </main>
  );
}
