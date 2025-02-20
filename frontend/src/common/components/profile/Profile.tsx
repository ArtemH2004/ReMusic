import {
  ProfileDropdownButton,
  ProfileDropdownWrapper,
  ProfileImg,
  ProfileName,
  ProfileSvg,
  ProfileSvgWrapper,
  ProfileWrapper,
} from "@/common/components/profile/styles";
import { memo, useState } from "react";
import { ProfileDropdown } from "@/common/components/profile/ProfileDropdown";
import { getImgByName } from "@/common/helpers/getImgByName";
import { useAppSelector } from "@/common/hooks/useAppSelector";

const defaultUserImg = "/public/images/default-user.svg";

export const Profile = memo(() => {
  const { authorizedUser } = useAppSelector((state) => state.userReducer);
  const [isHover, setHover] = useState(false);
  const img = !!authorizedUser.photo
    ? getImgByName(authorizedUser.photo)
    : defaultUserImg;

  return (
    <>
      <ProfileDropdownWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ProfileDropdownButton $isActive={isHover}>
          <ProfileWrapper>
            <ProfileImg src={img} alt={authorizedUser.username} />
            <ProfileName>{authorizedUser.username}</ProfileName>
            <ProfileSvgWrapper $isActive={isHover}>
              <ProfileSvg src="/public/images/icons/arrow-down.svg" />
            </ProfileSvgWrapper>
          </ProfileWrapper>
        </ProfileDropdownButton>

        {isHover && <ProfileDropdown />}
      </ProfileDropdownWrapper>
    </>
  );
});
