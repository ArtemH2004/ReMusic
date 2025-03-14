import {
  ProfileDropdownGrayLink,
  ProfileDropdownItem,
  ProfileDropdownLink,
  ProfileDropdownList,
} from "@/common/components/profile/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useActions } from "@/store/actions";
import { useUpdateUserPhotoByIdMutation } from "@/store/reducers/user/userApi";
import { userActions } from "@/store/reducers/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { authorizedUser } = useAppSelector((state) => state.userReducer);
  const lang = sessionStorage.getItem("language") || "Eng";
  const language = getLanguage();
  const { clearAuthorizedUser } = useActions();
  const [updateUserPhoto] = useUpdateUserPhotoByIdMutation();
  const dispatch = useDispatch();

  const handleChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    document.location.reload();
  };

  const handleLogout = () => {
    clearAuthorizedUser();
  };

  const handleUploadPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      if (!file.type.startsWith("image/")) {
        return;
      }
  
      const formData = new FormData();
      formData.append("photo", file);
  
      try {
        const userId = authorizedUser.id;
        const result = await updateUserPhoto({ userId, formData });
        dispatch(userActions.updateUserPhoto(result.data?.photo ?? ""))
      } catch (error) {
        alert("Не удалось обновить фото.");
      }
    }
  };

  return (
    <ProfileDropdownList>
      <ProfileDropdownItem>
        <ProfileDropdownLink>
          <input
            type="file"
            accept="image/*"
            onChange={handleUploadPhoto}
            id="file-input"
            style={{ display: "none" }}
          />
          <label htmlFor="file-input">{language.setImg}</label>
        </ProfileDropdownLink>
      </ProfileDropdownItem>
      {authorizedUser.isartist && (
        <ProfileDropdownItem>
          <ProfileDropdownLink
            onClick={() => navigate(`/artist/${authorizedUser.id}`)}
          >
            {language.profile}
          </ProfileDropdownLink>
        </ProfileDropdownItem>
      )}
      <ProfileDropdownItem>
        <ProfileDropdownLink
          onClick={() => navigate(`/user/${authorizedUser.id}/reviews`)}
        >
          {language.yourReviews}
        </ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink
          onClick={() => handleChangeLanguage(lang === "Eng" ? "Рус" : "Eng")}
        >
          {language.language}{" "}
          <ProfileDropdownGrayLink>{language.lang}</ProfileDropdownGrayLink>
        </ProfileDropdownLink>
      </ProfileDropdownItem>
      <ProfileDropdownItem>
        <ProfileDropdownLink $isRed={true} onClick={handleLogout}>
          {language.logout}
        </ProfileDropdownLink>
      </ProfileDropdownItem>
    </ProfileDropdownList>
  );
};
