import { Routes, Route, Navigate } from "react-router-dom";

import ContentHome from "./ContentHomeMini";
import ContentMenu from "./ContentMenuMini";
import ContentGallery from "./ContentGalleryMini";
import ContentInterior from "./ContentInteriorMini";
import InteriorSlideShow from "./InteriorSlideShowMini";
import ContentLocation from "./ContentLocationMini";
import ContentAboutUs from "./ContentAboutUsMini";

interface Props {
  handleClickNav: (item: string) => void;
}

const ContentMini = ({ handleClickNav }: Props) => {
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
      <Route path="/Location/*" element={<Navigate to="/Location" replace />} />
      <Route path="/About Us/*" element={<Navigate to="/About Us" replace />} />
    </Routes>
  );
};

export default ContentMini;
