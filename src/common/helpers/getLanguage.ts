import { EnglishLanguage } from "@/common/language/english";
import { RussianLanguage } from "@/common/language/russian";

export const getLanguage = () => {
    const language = sessionStorage.getItem("language") || 'Eng';
    return language === "Eng" ? RussianLanguage : EnglishLanguage;
}