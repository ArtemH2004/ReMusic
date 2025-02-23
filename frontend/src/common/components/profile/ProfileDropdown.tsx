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
import { useState } from "react";

export const ProfileDropdown = () => {
  const {authorizedUser} = useAppSelector((state) => state.userReducer)
  const lang = sessionStorage.getItem("language") || "Eng";
  const language = getLanguage();
  const [selectedFile, setSelectedFile] = useState<string | null>(null); // Изменили тип на string | null
  const { clearAuthorizedUser } = useActions();
  const [updateUserPhoto] = useUpdateUserPhotoByIdMutation<{ userId: number, photo: string }>(); // Изменили тип на string

  const handleChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    document.location.reload();
  };

  const handleLogout = () => {
    clearAuthorizedUser();
  };

  const handleUploadPhoto = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      // Проверка на допустимый тип файла
      if (!file.type.startsWith("image/")) {
        alert("Пожалуйста, выберите изображение.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    console.log(selectedFile)

    if (selectedFile) {
      try {
        const userId = authorizedUser.id; // Замените на актуальный userId
        await updateUserPhoto({ userId, photo: selectedFile });
        console.log(userId, selectedFile)
        alert("Фото успешно обновлено!");
        setSelectedFile(null); // Сброс состояния после успешной загрузки
      } catch (error) {
        console.error("Ошибка при обновлении фото:", error);
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
          />
          <label htmlFor="file-input">{language.setImg}</label>
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
