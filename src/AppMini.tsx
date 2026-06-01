import { useState } from "react";

import NavBar from "./componentsMini/NavBarMini";
import Banner from "./componentsMini/BannerMini";
import ContentMini from "./componentsMini/ContentMini";
import Footer from "./componentsMini/FooterMini";

import "./App.css";
import { scrollToTop } from "./components/footer/ScrollUp";

function AppMini() {
  const [selectedItemNav, setSelectedItemNav] = useState("");
  const handleClickNav = (item: string) => {
    scrollToTop();
    setSelectedItemNav(item);
  };
  const [openNavBar, setOpenNavBar] = useState(false);
  const handleClickOpenNavBar = () => setOpenNavBar(!openNavBar);

  return (
    <>
      <NavBar
        selectedItemNav={selectedItemNav}
        handleClickNav={handleClickNav}
        openNavBar={openNavBar}
        handleClickOpenNavBar={handleClickOpenNavBar}
      />
      <Banner handleClickOpenNavBar={handleClickOpenNavBar} />
      {!openNavBar && <ContentMini handleClickNav={handleClickNav} />}

      <Footer />
    </>
  );
}

export default AppMini;
