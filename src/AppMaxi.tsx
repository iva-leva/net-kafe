import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import ContentHome from "./components/ContentHome";
import ContentMenu from "./components/ContentMenu";
import ContentGallery from "./components/ContentGallery";
import ContentInterior from "./components/ContentInterior";
import InteriorSlideShow from "./components/InteriorSlideShow";
import ContentLocation from "./components/ContentLocation";
import ContentAboutUs from "./components/ContentAboutUs";
import Footer from "./components/Footer";

import "./App.css";
import { scrollToTop } from "./components/footer/ScrollUp";

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
          element={
            <ContentGallery
              handleClickNav={handleClickNav}
              setFooter100={setFooter100}
            />
          }
        />
        <Route
          path="/Gallery/:id"
          element={
            <ContentGallery
              handleClickNav={handleClickNav}
              setFooter100={setFooter100}
            />
          }
        />

        <Route
          path="/Interior/SlideShow"
          element={<InteriorSlideShow handleClickNav={handleClickNav} />}
        />
        <Route
          path="/Interior"
          element={
            <ContentInterior
              handleClickNav={handleClickNav}
              setFooter100={setFooter100}
            />
          }
        />
        <Route
          path="/Interior/:id"
          element={
            <ContentInterior
              handleClickNav={handleClickNav}
              setFooter100={setFooter100}
            />
          }
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

      <Footer footer100={footer100} />
    </>
  );
}

export default AppMaxi;
