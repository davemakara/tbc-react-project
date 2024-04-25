import i18n from "../../app/i18n";

const LanguageSwitcher = () => {
  const toggleLanguage = (e) => {
    const nextLanguage = e.target.value;
    i18n.changeLanguage(nextLanguage);
  };
  return (
    <select
      onChange={(e) => toggleLanguage(e)}
      className="p-1 mr-[15px] hidden md:block"
    >
      <option value="en">EN</option>
      <option value="ge">GE</option>
    </select>
  );
};

export default LanguageSwitcher;
