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

  useEffect(() => {
      setLoading(false);
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
