import { useLocation } from "react-router-dom";
import { LibraryPageSection } from "@/modules/user/library/styles";
import { LibrarySongs } from "@/modules/user/library/components/LibrarySongs";
import { LibraryArtists } from "@/modules/user/library/components/LibraryArtists";
import { LibraryAlbums } from "@/modules/user/library/components/LibraryAlbums";
import { LibraryReviews } from "@/modules/user/library/components/LibraryReviews";

export const LibraryPage = () => {
  const location = useLocation();

  return (
    <LibraryPageSection>
      {location.search === "" || location.search === "?foo=songs" ? (
        <LibrarySongs />
      ) : location.search === "?foo=artists" ? (
        <LibraryArtists />
      ) : location.search === "?foo=albums" ? (
        <LibraryAlbums />
      ) : (
        location.search === "?foo=reviews" && <LibraryReviews />
      )}
    </LibraryPageSection>
  );
};
