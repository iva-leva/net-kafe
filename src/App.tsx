import { useEffect, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import AppMaxi from "./AppMaxi";
import AppMini from "./AppMini";
import LangContext from "./contexts/langContext";

function App() {
  type SelectedLanguage = "En" | "Pt";
  const [lang, setLang] = useState("En" as SelectedLanguage);

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language as SelectedLanguage) setLang(language as SelectedLanguage);
  }, []);

  const isMiniScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {isMiniScreen ? <AppMini /> : <AppMaxi />}
    </LangContext.Provider>
  );
}

export default App;
