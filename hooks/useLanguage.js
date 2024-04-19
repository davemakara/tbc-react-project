import { resourses } from "../resources/Resource";
import { useContextLanguage } from "../store/language";

const useLanguage = () => {
  const { language } = useContextLanguage();
  return resourses[language];
};

export default useLanguage;
