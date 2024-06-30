"use client";

import GEORGIA_FLAG from "../../public/georgiaFLAG.png";
import UK_FLAG from "../../public/ukFLAG.png";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import Image from "next/image";

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      {locale === "en" ? (
        <button onClick={() => changeLocale("ka")}>
          <Image src={GEORGIA_FLAG} alt="georgia flag" width={26} height={52} />
        </button>
      ) : (
        <button onClick={() => changeLocale("en")}>
          <Image src={UK_FLAG} alt="uk flag" width={26} height={52} />
        </button>
      )}
    </>
  );
}
