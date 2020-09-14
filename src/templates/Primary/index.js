import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PrimaryNav from "components/PrimaryNav";
import "styles/index.scss";
import Logo from "components/Logo";

const Primary = ({ children }) => {
  const navItems = [
    { url: "/", text: "About 10x" },
    { url: "/", text: "Send us an idea" },
    { url: "/", text: "The 10x process" },
    { url: "/", text: "The projects" },
  ];
  return (
    <div className="App">
      <Header logo={<Logo />} nav={<PrimaryNav items={navItems} />} />
      {children}
      <Footer />
    </div>
  );
};

export default Primary;
