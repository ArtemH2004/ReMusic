import {
  ProfileDropdownGrayLink,
  ProfileDropdownItem,
  ProfileDropdownLink,
  ProfileDropdownList,
} from "@/common/components/profile/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useActions } from "@/store/actions";
import { useUpdateUserPhotoByIdMutation } from "@/store/reducers/user/userApi";
import { useState } from "react";

export const ProfileDropdown = () => {
  const lang = sessionStorage.getItem("language") || "Eng";
  const language = getLanguage();
  const [selectedFile, setSelectedFile] = useState(null);
  const { clearAuthorizedUser } = useActions();
  const [updateUserPhoto] = useUpdateUserPhotoByIdMutation();

  const handleChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    document.location.reload();
  };

  const handleLogout = () => {
    clearAuthorizedUser(); // Очистка авторизованного пользователя
    // Дополнительно: перенаправьте пользователя на экран входа
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result); // Сохраняем изображение в состоянии
      };
      reader.readAsDataURL(file); // Читаем файл как Data URL
    }
  };

  const handleUploadPhoto = async () => {
    if (selectedFile) {
      try {
        // Замените userId на соответствующий идентификатор пользователя
        const userId = 1; // пример, замените на нужный userId
        await updateUserPhoto({ userId, photo: selectedFile });
        alert("Фото успешно обновлено!");
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
            onChange={handleFileChange}
            style={{ display: "none" }}
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
