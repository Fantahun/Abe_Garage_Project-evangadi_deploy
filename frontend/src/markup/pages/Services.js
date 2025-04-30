import React from "react";
import PageHeader from "../components/General/PageHeader/PageHeader";
import FeaturedServices from "../components/General/FeaturedServices/FeaturedServices";
import VideoBanner from "../components/General/VideoBanner/VideoBanner";

function Services() {
  return (
    <div>
      <PageHeader pageTitle="Services" />
      <FeaturedServices />
      <VideoBanner />
    </div>
  );
}

export default Services;
