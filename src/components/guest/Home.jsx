import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import Event from "./Event";
import News from "./News";
import Contact from "./Contact";
import WhyChooseUs from "./WhyCooseUs";
import WelcomeSection from "./WelcomeSection";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <WelcomeSection />
      <section id="events">
        <Event />
      </section>
      <WhyChooseUs />
      <section id="news">
        <News />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

