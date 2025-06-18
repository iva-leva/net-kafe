import { useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import AppMaxi from "./AppMaxi";
import AppMini from "./AppMini";
import LangContext from "./contexts/langContext";

function App() {
  const [lang, setLang] = useState("En" as "En" | "Pt");

  const isMiniScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {isMiniScreen ? <AppMini /> : <AppMaxi />}
    </LangContext.Provider>
  );
}

export default App;
