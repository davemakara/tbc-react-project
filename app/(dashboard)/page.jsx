"use client";
import { useState, useEffect } from "react";
import useLanguage from "../../hooks/useLanguage";

// import ProductsList from "../components/ProductsList";
// import SearchSection from "../components/searchSection";

import styles from "../../components/Homepage.module.css";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const language = useLanguage();

  // console.log(language);

  return (
    <main className={styles["main-wrapper"]}>
      {/* <SearchSection
        setIsClicked={setIsClicked}
        setSearchItem={setSearchItem}
      />
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      /> */}
      <h1>{language.landing.title}</h1>
      <h2>{language.landing.subTitle}</h2>
    </main>
  );
};

export default Homepage;
