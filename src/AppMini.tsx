import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Banner from "./componentsMini/BannerMini";
import NavBar from "./componentsMini/NavBarMini";

import ContentHome from "./componentsMini/ContentHomeMini";
import ContentMenu from "./componentsMini/ContentMenuMini";
import ContentGallery from "./componentsMini/ContentGalleryMini";
import ContentInterior from "./componentsMini/ContentInteriorMini";
import InteriorSlideShow from "./componentsMini/InteriorSlideShowMini";
import ContentLocation from "./componentsMini/ContentLocationMini";
import ContentAboutUs from "./componentsMini/ContentAboutUsMini";
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
      <Banner />
      {!openNavBar && (
        <Routes>
          <Route
            path="/"
            element={<ContentHome handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Home"
            element={<ContentHome handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Menu"
            element={<ContentMenu handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Menu/:id"
            element={<ContentMenu handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Gallery"
            element={<ContentGallery handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Gallery/:id"
            element={<ContentGallery handleClickNav={handleClickNav} />}
          />

          <Route
            path="/Interior/SlideShow"
            element={<InteriorSlideShow handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Interior"
            element={<ContentInterior handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Interior/:id"
            element={<ContentInterior handleClickNav={handleClickNav} />}
          />
          <Route
            path="/Location"
            element={<ContentLocation handleClickNav={handleClickNav} />}
          />
          <Route
            path="/About Us"
            element={<ContentAboutUs handleClickNav={handleClickNav} />}
          />

          <Route path="/Home/*" element={<Navigate to="/Home" replace />} />
          <Route path="/Menu/*" element={<Navigate to="/Menu" replace />} />
          <Route
            path="/Location/*"
            element={<Navigate to="/Location" replace />}
          />
          <Route
            path="/About Us/*"
            element={<Navigate to="/About Us" replace />}
          />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default AppMini;
