import { SongInPlaylist } from "@/common/components/song/SongInPlaylist";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import {
  PlaylistPageContentWrapper,
  PlaylistPageDescription,
  PlaylistPageInnerWrapper,
  PlaylistPageSection,
  PlaylistPageSongsWrapper,
  PlaylistPageSubtitle,
  PlaylistPageSubtitleLink,
  PlaylistPageTitle,
  PlaylistPageButtonWrapper,
  PlaylistPageList,
} from "@/modules/user/playlist/styles";

export const PlaylistPage = () => {
  const accentColor = getImgAccentColor(
    "https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
  );

  scrollToTop();

  return (
    <>
      <PlaylistPageSection $accentColor={accentColor}>
        <PlaylistPageContentWrapper>
          <ImgCover
            img="https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
            title="Nevermind"
            artist="NIRVANA"
            year={2001}
            isButtonsActive={false}
          />

          <PlaylistPageInnerWrapper>
            <PlaylistPageSubtitle>Playlist</PlaylistPageSubtitle>
            <PlaylistPageTitle>Nevermind</PlaylistPageTitle>
            <PlaylistPageSubtitleLink>NIRVANA</PlaylistPageSubtitleLink>
            <PlaylistPageDescription>
              5 songs • 34 minutes
            </PlaylistPageDescription>
          </PlaylistPageInnerWrapper>
        </PlaylistPageContentWrapper>

        <PlaylistPageSongsWrapper>
          <PlaylistPageContentWrapper>
            <PlaylistPageButtonWrapper $accentColor={accentColor}>
              <ButtonWithIcon
                size={60}
                icon={"player/play-white"}
                title="Воспроизвести"
              />
            </PlaylistPageButtonWrapper>
            <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
          </PlaylistPageContentWrapper>

          <PlaylistPageList>
            <SongInPlaylist />
            <SongInPlaylist />
            <SongInPlaylist />
            <SongInPlaylist />
          </PlaylistPageList>
        </PlaylistPageSongsWrapper>
      </PlaylistPageSection>
    </>
  );
};
