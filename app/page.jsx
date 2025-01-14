"use client"

import React, {useEffect, useContext} from "react";
import NavBar from 'components/home/NavBar';
import Hero from 'components/home/Hero';
import ElectionDataSection from "components/home/ElectionDataSection";
import ElectionUpdateSection from "components/home/ElectionUpdateSection";
import EyeWitnesses from "components/home/EyeWitnesses";
import FAQSection from "components/home/FAQSection";
import Footer from "components/home/Footer";
import Initiatives from "components/home/Initiatives";
import JoinCommunitySection from "components/home/JoinCommunitySection";
import NewsAndReports from "components/home/NewsAndReports";
import OurMission from "components/home/OurMission";
import StayInformed from "components/home/StayInformed";
import LiveElectionUpdates from "components/home/LiveElectionUpdates";

import {AppContext} from "contexts/App"


export default function Home() {

  const {setLoading} = useContext(AppContext);

  

  // Callback for IntersectionObserver
  const callback = function (entries) {
    entries.forEach((entry) => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        // Add the fadeIn class:
        entry.target.classList.add("animate-fadeIn");
      } else {
        // Otherwise remove the fadein class
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };

  useEffect(() => {
      setLoading(false);

      // Get all the elements you want to show on scroll
      const targets = document.querySelectorAll(".show-on-scroll");

      // Set up a new observer
      const observer = new IntersectionObserver(callback);

      // Loop through each of the target
      targets.forEach(function (target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <LiveElectionUpdates />
      <ElectionUpdateSection />
      <JoinCommunitySection />
      <StayInformed />
      <OurMission />
      <Initiatives />
      <EyeWitnesses />
      <ElectionDataSection />
      <NewsAndReports />
      <FAQSection />
      <Footer />
    </>
  );
}
