import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
    ArtistPageAlbumList,
  ArtistPageButtonWrapper,
  ArtistPageContentSection,
  ArtistPageContentWrapper,
  ArtistPageDescription,
  ArtistPageHeader,
  ArtistPageImg,
  ArtistPageInnerWrapper,
  ArtistPageList,
  ArtistPageListTitle,
  ArtistPageSection,
  ArtistPageSongsWrapper,
  ArtistPageSubtitle,
  ArtistPageTitle,
} from "@/modules/user/artist/styles";
import { Song } from "@/common/components/song/Song";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";

export const ArtistPage = () => {
  const accentColor = getImgAccentColor(
    "https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
  );
  scrollToTop();

  return (
    <ArtistPageSection $accentColor={accentColor}>
      <ArtistPageContentWrapper>
        <ArtistPageImg
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
          alt="MACAN"
        />

        <ArtistPageInnerWrapper>
          <ArtistPageSubtitle>Artist</ArtistPageSubtitle>
          <ArtistPageTitle>Big Baby Tape</ArtistPageTitle>
          <ArtistPageDescription>152 songs • 6 albums</ArtistPageDescription>
        </ArtistPageInnerWrapper>
      </ArtistPageContentWrapper>

      <ArtistPageSongsWrapper>
        <ArtistPageContentWrapper>
          <ArtistPageButtonWrapper $accentColor={accentColor}>
            <ButtonWithIcon
              size={60}
              icon={"player/play-white"}
              title="Воспроизвести"
            />
          </ArtistPageButtonWrapper>
          <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
        </ArtistPageContentWrapper>

        <ArtistPageContentSection>
          <ArtistPageListTitle>Songs</ArtistPageListTitle>

          <ArtistPageList>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
          </ArtistPageList>
        </ArtistPageContentSection>

        <ArtistPageContentSection>
          <ArtistPageHeader>
            <ArtistPageListTitle>Albums</ArtistPageListTitle>
            <ButtonSeeAll />
          </ArtistPageHeader>

          <ArtistPageAlbumList>
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
          </ArtistPageAlbumList>
        </ArtistPageContentSection>
      </ArtistPageSongsWrapper>
    </ArtistPageSection>
  );
};
