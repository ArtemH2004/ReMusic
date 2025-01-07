import {
  ProfileDropdownGrayLink,
  ProfileDropdownItem,
  ProfileDropdownLink,
  ProfileDropdownList,
} from "@/common/components/profile/styles";
import { getLanguage } from "@/common/helpers/getLanguage";

export const ProfileDropdown = () => {
  const lang = sessionStorage.getItem("language") || 'Eng';
  const language = getLanguage();

  const handleChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    document.location.reload();
  };

  return (
    <ProfileDropdownList>
      <ProfileDropdownItem>
        <ProfileDropdownLink>{language.setImg}</ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink onClick={() => handleChangeLanguage(lang === 'Eng' ? 'Рус' : 'Eng')}>{language.language} <ProfileDropdownGrayLink>{language.lang}</ProfileDropdownGrayLink></ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink $isRed={true}>{language.logout}</ProfileDropdownLink>
      </ProfileDropdownItem>
    </ProfileDropdownList>
  );
};
