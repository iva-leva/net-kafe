import React from "react";

export interface LangContextType {
  lang: "En" | "Pt";
  setLang: (str: "En" | "Pt") => void;
}

const LangContext = React.createContext<LangContextType>({} as LangContextType);
export default LangContext;
