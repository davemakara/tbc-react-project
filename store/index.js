"use client";
import { LanguageProvider } from "./language";
const StoreProvider = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default StoreProvider;
