"use client";

import GEORGIA_FLAG from "../../public/georgiaFLAG.png";
import UK_FLAG from "../../public/ukFLAG.png";

// import { ChangeEvent } from "react";
// import { useEffect, useState } from "react";

// import { useChangeLocale, useCurrentLocale } from "../../locales/client";

// const LanguageSwitcher = () => {
//   const currentLocale = useCurrentLocale();
//   const changeLocale = useChangeLocale();
//   const [selectedValue, setSelectedValue] = useState<string>(currentLocale);

//   useEffect(() => {
//     setSelectedValue(currentLocale);
//   }, [currentLocale]);

//   const toggleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
//     const nextLanguage: "en" | "ka" = e.target.value as "en" | "ka";
//     setSelectedValue(nextLanguage);
//     changeLocale(nextLanguage);
//   };
//   return (
//     <select
//       value={selectedValue}
//       onChange={(e) => toggleLanguage(e)}
//       className="p-1 mr-[15px]"
//     >
//       <option value="en">EN</option>
//       <option value="ka">GE</option>
//     </select>
//   );
// };

// export default LanguageSwitcher;

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
