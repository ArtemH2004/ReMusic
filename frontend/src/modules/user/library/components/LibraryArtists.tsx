import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import { LibraryPageAlbumsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryArtists = () => {
  const language = getLanguage();

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>{language.likedArtists} <LibraryPageCount>(52)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageAlbumsList>
        {/* <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem /> */}
      </LibraryPageAlbumsList>
    </>
  );
};
