// "use client";

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

"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      {locale === "en" ? (
        <button
          className="border rounded px-1"
          onClick={() => changeLocale("ka")}
        >
          GE
        </button>
      ) : (
        <button
          className="border rounded px-1"
          onClick={() => changeLocale("en")}
        >
          EN
        </button>
      )}
    </>
  );
}
