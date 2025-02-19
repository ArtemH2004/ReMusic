import {
  NavPanelContentWrapper,
  NavPanelList,
  NavPanelMenu,
  NavPanelWrapper,
} from "@/common/components/navPanel/styles";
import { Logo } from "@/common/components/Logo";
import { NavItem } from "@/common/components/navPanel/NavItem";
import { getLanguage } from "@/common/helpers/getLanguage";

export const NavPanel = () => {
  const language = getLanguage();

  return (
    <NavPanelWrapper>
      <NavPanelContentWrapper>
        <Logo />
        <NavPanelMenu>
          <NavPanelList>
            <NavItem linkTo="/home" title={language.home} icon="home" />
            <NavItem linkTo="/search" title={language.search} icon="search" />
            <NavItem linkTo="/library" title={language.library} icon="library" />
          </NavPanelList>
        </NavPanelMenu>
      </NavPanelContentWrapper>
    </NavPanelWrapper>
  );
};
