import {
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
        <ProfileDropdownLink>Language</ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink>Log out</ProfileDropdownLink>
      </ProfileDropdownItem>
    </ProfileDropdownList>
  );
};
