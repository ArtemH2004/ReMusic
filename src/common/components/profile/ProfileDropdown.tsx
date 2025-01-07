import {
  ProfileDropdownGrayLink,
  ProfileDropdownItem,
  ProfileDropdownLink,
  ProfileDropdownList,
} from "@/common/components/profile/styles";

export const ProfileDropdown = () => {
  return (
    <ProfileDropdownList>
      <ProfileDropdownItem>
        <ProfileDropdownLink>Set image</ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink>Language <ProfileDropdownGrayLink>(Eng)</ProfileDropdownGrayLink></ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink $isRed={true}>Log out</ProfileDropdownLink>
      </ProfileDropdownItem>
    </ProfileDropdownList>
  );
};
