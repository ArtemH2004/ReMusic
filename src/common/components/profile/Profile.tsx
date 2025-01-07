import {
  ProfileDropdownButton,
  ProfileDropdownWrapper,
  ProfileImg,
  ProfileName,
  ProfileSvg,
  ProfileSvgWrapper,
  ProfileWrapper,
} from "@/common/components/profile/styles";
import { useState } from "react";
import { ProfileDropdown } from "@/common/components/profile/ProfileDropdown";

export const Profile = () => {
  const [isHover, setHover] = useState(false);
  return (
    <ProfileDropdownWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ProfileDropdownButton $isActive={isHover}>
        <ProfileWrapper>
          <ProfileImg
            src="https://images.genius.com/4d7e6f097ee2903ed8f5eb7b2e2e2d66.640x640x1.jpg"
            alt="alblack52"
          />
          <ProfileName>alblack52</ProfileName>
          <ProfileSvgWrapper $isActive={isHover}>
            <ProfileSvg src="public/images/icons/arrow-down.svg" />
          </ProfileSvgWrapper>
        </ProfileWrapper>
      </ProfileDropdownButton>

      {isHover && <ProfileDropdown />}
    </ProfileDropdownWrapper>
  );
};
