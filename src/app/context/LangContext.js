"use client";
import React, { createContext, useContext, useState } from "react";
import en from "../locales/en.json";
import nl from "../locales/nl.json";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const dict = lang === "en" ? en : nl;
  return (
    <LangContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
