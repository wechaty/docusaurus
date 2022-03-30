import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeaderSection from "./header-section/hero-section";
import FeaturesSection from "./features-section/features-section";
import HonorsAndAwards from "./honors-and-awards-section/honors-and-awards-section";
import LetsGetStarted from "./lets-get-started/lets-get-started-section";
import Sponsors from "./sponsors-section/sponsors-section";
import VoiceOfDevelopers from "./voice-of-developers-section/voice-of-developers-section";
import TalksSection from "./talks-section/talks-section";
import { DocusaurusConfig } from "@docusaurus/types";

// one-pager - Encapsulates the essence of a technology onto a single page.

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} as Partial<DocusaurusConfig> } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RPA SDK for Chatbot Makers."
    >
      <HeaderSection />
      <FeaturesSection/>
      <LetsGetStarted />
      <TalksSection />
      <HonorsAndAwards />
      <VoiceOfDevelopers />
      <Sponsors />
    </Layout>
  );
}

export default Home;
