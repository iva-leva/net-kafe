import { useState } from "react";

import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

import "./App.css";
import { scrollToTop } from "./components/footer/ScrollUp";
import Content from "./components/Content";

function AppMaxi() {
  const [selectedItemNav, setSelectedItemNav] = useState("");
  const handleClickNav = (item: string) => {
    scrollToTop();
    setSelectedItemNav(item);
  };

  const [footer100, setFooter100] = useState(false);

  return (
    <>
      <Banner />
      <NavBar
        selectedItemNav={selectedItemNav}
        handleClickNav={handleClickNav}
      />
      <Content handleClickNav={handleClickNav} setFooter100={setFooter100} />
      <Footer footer100={footer100} />
    </>
  );
}

export default AppMaxi;
