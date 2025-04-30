import React from "react";
import PageHeader from "../components/General/PageHeader/PageHeader";
import Experience from "../components/General/Experience/Experience";
import WhyChooseUs from "../components/General/WhyChooseUs/WhyChooseUs";
import VideoBanner from "../components/General/VideoBanner/VideoBanner";

function About() {
  return (
    <div>
      <PageHeader pageTitle="About" />
      <Experience />
      <WhyChooseUs />
      <VideoBanner />
    </div>
  );
}

export default About;
