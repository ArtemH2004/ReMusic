import { NavPanelList, NavPanelMenu, NavPanelWrappper } from "@/common/components/navPanel/styles"
import { Logo } from "@/common/components/Logo"
import { NavItem } from "./NavItem"

export const NavPanel = () => {
  return (
    <NavPanelWrappper>
        <Logo />
        <NavPanelMenu>
            <NavPanelList>
                <NavItem linkTo="/home" title="Home" icon="home" />
                <NavItem linkTo="/search" title="Search" icon="search" />
                <NavItem linkTo="/library" title="Library" icon="library" />
            </NavPanelList>
        </NavPanelMenu>
    </NavPanelWrappper>
  )
}
