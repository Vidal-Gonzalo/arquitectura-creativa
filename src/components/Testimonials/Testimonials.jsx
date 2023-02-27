import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";
import member1 from "../../assets/member1.jpeg";
import member2 from "../../assets/member2.jpeg";
import member3 from "../../assets/member3.jpeg";
import member4 from "../../assets/member4.jpeg";

import "./Testimonials.css";
import "swiper/css";

export default function Testimonials() {
  const [swiper, setSwiper] = useState();
  const testimonials = [
    {
      id: 1,
      author: "Juan Vidal",
      position: "Arquitecto",
      image: member1,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },
    {
      id: 2,
      author: "Daniel Borgui",
      position: "Responsable de obra",
      image: member2,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },
    {
      id: 3,
      author: "Gustavo Nievas",
      position: "Responsable de obra",
      image: member3,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },
    {
      id: 4,
      author: "Lucas Vidal",
      position: "Sobreestante",
      image: member4,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },

    {
      id: 5,
      author: "Daniel Borgui",
      position: "Responsable de obra",
      image: member2,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },

    {
      id: 6,
      author: "Gustavo Nievas",
      position: "Responsable de obra",
      image: member3,
      testimonial:
        "Vitae laudantium, nesciunt quo laboriosam odio fuga error voluptatem officiis necessitatibus illo in aliquam magni magnam modi aspernatur sint at! At, officiis.",
    },
  ];

  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      if (!swiper.destroyed) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [swiper]);

  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <Grid container className="testimonials-text">
          <Grid className="testimonials-grid" item={true} xs={6}>
            <div className="testimonials-title">
              <h3>
                Los <span>testimonios</span> de nuestros clientes
              </h3>
            </div>
          </Grid>
          <Grid className="testimonials-grid buttons-grid" item={true} xs={6}>
            <div className="testimonials-button-container">
              <div className="testimonial-button">
                <KeyboardArrowLeftIcon
                  fontSize={"large"}
                  sx={{ fontSize: "3.5rem" }}
                  ref={prevRef}
                />
              </div>
              <div className="testimonial-button">
                <KeyboardArrowRightIcon
                  sx={{ fontSize: "3.5rem" }}
                  fontSize={"large"}
                  ref={nextRef}
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Swiper
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          loop={true}
          spaceBetween={50}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={3000}
          className="testimonials-swiper"
          onSwiper={setSwiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-author">
                  <div className="testimonial-photo">
                    <img src={testimonial.image} alt={"Foto de perfil"} />
                  </div>
                  <div className="testimonial-name">
                    <p>{testimonial.author}</p>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
                <div className="testimonial-description">
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
