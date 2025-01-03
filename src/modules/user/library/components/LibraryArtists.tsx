import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { LibraryPageAlbumsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryArtists = () => {
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>Liked Artists <LibraryPageCount>(52)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageAlbumsList>
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
        <ArtistItem />
        <ArtistItem />
      </LibraryPageAlbumsList>
    </>
  );
};
