import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import {
  AlbumPageContentWrapper,
  AlbumPageDescription,
  AlbumPageInnerWrapper,
  AlbumPageSection,
  AlbumPageSongsWrapper,
  AlbumPageSubtitle,
  AlbumPageSubtitleLink,
  AlbumPageTitle,
  AlbumPageButtonWrapper,
  AlbumPageList,
} from "@/modules/user/album/styles";

export const AlbumPage = () => {
  const accentColor = getImgAccentColor(
    "https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
  );

  scrollToTop();

  return (
    <>
      <AlbumPageSection $accentColor={accentColor}>
        <AlbumPageContentWrapper>
          <ImgCover
            img="https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
            title="Nevermind"
            artist="NIRVANA"
            year={2001}
            isButtonsActive={false}
          />

          <AlbumPageInnerWrapper>
            <AlbumPageSubtitle>Album</AlbumPageSubtitle>
            <AlbumPageTitle>Nevermind</AlbumPageTitle>
            <AlbumPageSubtitleLink>NIRVANA</AlbumPageSubtitleLink>
            <AlbumPageDescription>
              5 songs • 34 minutes
            </AlbumPageDescription>
          </AlbumPageInnerWrapper>
        </AlbumPageContentWrapper>

        <AlbumPageSongsWrapper>
          <AlbumPageContentWrapper>
            <AlbumPageButtonWrapper $accentColor={accentColor}>
              <ButtonWithIcon
                size={60}
                icon={"player/play-white"}
                title="Воспроизвести"
              />
            </AlbumPageButtonWrapper>
            <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
          </AlbumPageContentWrapper>

          <AlbumPageList>
            <SongInAlbum />
            <SongInAlbum />
            <SongInAlbum />
            <SongInAlbum />
          </AlbumPageList>
        </AlbumPageSongsWrapper>
      </AlbumPageSection>
    </>
  );
};
