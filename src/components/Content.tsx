import { Routes, Route, Navigate } from "react-router-dom";
import ContentHome from "./ContentHome";
import ContentMenu from "./ContentMenu";
import ContentGallery from "./ContentGallery";
import ContentInterior from "./ContentInterior";
import InteriorSlideShow from "./InteriorSlideShow";
import ContentLocation from "./ContentLocation";
import ContentAboutUs from "./ContentAboutUs";

interface Props {
  handleClickNav: (str: string) => void;
  setFooter100: (bool: boolean) => void;
}

const Content = ({ handleClickNav, setFooter100 }: Props) => {
  return (
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
      <Route path="/Location/*" element={<Navigate to="/Location" replace />} />
      <Route path="/About Us/*" element={<Navigate to="/About Us" replace />} />
    </Routes>
  );
};

export default Content;
