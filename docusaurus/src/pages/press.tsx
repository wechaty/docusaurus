import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeaderSection from "./header-section/hero-section";
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
    </Layout>
  );
}

export default Home;
