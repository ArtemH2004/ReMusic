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
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getImgByName } from "@/common/helpers/getImgByName";
import { ProfileLoading } from "@/common/components/loading/ProfileLoading";

export const Profile = memo(() => {
  const { data, isLoading } = useGetUserByIdQuery(1);
  const [isHover, setHover] = useState(false);
  const img = getImgByName(data?.photo || "");

  return (
    <>
      {isLoading ? (
        <ProfileLoading />
      ) : (
        <ProfileDropdownWrapper
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ProfileDropdownButton $isActive={isHover}>
            <ProfileWrapper>
              <ProfileImg src={img} alt={data?.username} />
              <ProfileName>{data?.username}</ProfileName>
              <ProfileSvgWrapper $isActive={isHover}>
                <ProfileSvg src="public/images/icons/arrow-down.svg" />
              </ProfileSvgWrapper>
            </ProfileWrapper>
          </ProfileDropdownButton>

          {isHover && <ProfileDropdown />}
        </ProfileDropdownWrapper>
      )}
    </>
  );
});
