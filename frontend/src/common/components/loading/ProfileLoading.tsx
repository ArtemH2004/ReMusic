import {
  ProfileDropdownButton,
  ProfileWrapper,
} from "@/common/components/profile/styles";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";

export const ProfileLoading = () => {
  return (
    <ProfileDropdownButton $isActive={false}>
      <ProfileWrapper>
        <SquareLoading $size={34} />
        <TextLoading $height={15} />
        <SquareLoading $size={34} />
      </ProfileWrapper>
    </ProfileDropdownButton>
  );
};
