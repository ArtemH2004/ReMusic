import {
  HeaderContentWrapper,
  HeaderWrapper,
} from "@/common/components/header/styles";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
import { HeaderSearch } from "@/common/components/header/HeaderSearch";
import { HeaderLibrary } from "@/common/components/header/HeaderLibrary";
import { Profile } from "@/common/components/profile/Profile";
import { getLanguage } from "@/common/helpers/getLanguage";

export const Header = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.pathname;
  const language = getLanguage();
  
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <ButtonWithIcon
          size={40}
          title={language.back}
          icon={"back"}
          click={() => navigate(-1)}
        />
        <ButtonWithIcon
          size={40}
          title={language.forward}
          icon={"forward"}
          click={() => navigate(1)}
        />
        {currentUrl === "/home" ? (
          <></>
        ) : currentUrl === "/search" ? (
          <HeaderSearch />
        ) : (
          currentUrl === "/library" && <HeaderLibrary />
        )}
      </HeaderContentWrapper>

      <Profile />
    </HeaderWrapper>
  );
};
