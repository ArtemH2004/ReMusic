import {
  NavPanelIcon,
  NavPanelItem,
  NavPanelLink,
} from "@/common/components/navPanel/styles";

interface NavItemProps {
  icon: string;
  title: string;
  linkTo: string;
}

export const NavItem = ({ icon, title, linkTo }: NavItemProps) => {
  return (
    <NavPanelItem>
      <NavPanelLink to={linkTo} end>
        {({ isActive }) => (
          <>
            <NavPanelIcon
              src={`public/images/icons/navigation/${
                isActive ? `${icon}Active` : icon
              }.svg`}
              alt={title}
            />
            <span>{title}</span>
          </>
        )}
      </NavPanelLink>
    </NavPanelItem>
  );
};
