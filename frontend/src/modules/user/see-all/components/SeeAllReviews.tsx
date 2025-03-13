import {
  useGetAllAlbumReviewsByIdQuery,
  useGetAllArtistReviewsByIdQuery,
  useGetAllReviewsQuery,
  useGetAllSongReviewsByIdQuery,
} from "@/store/reducers/review/reviewApi";
import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import { Reviews } from "@/common/components/review/Reviews";
import { ReviewList } from "@/common/components/review/styles";
import { SeeAllCount, SeeAllTitle } from "@/modules/user/see-all/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { useGetSongByIdQuery } from "@/store/reducers/song/songApi";
import { useGetAlbumByIdQuery } from "@/store/reducers/album/albumApi";

export const SeeAllReviews = () => {
  const language = getLanguage();
  const { typeId, id } = useParams<{ typeId: string; id: string }>();
  const { data: reviews, isLoading } =
    typeId === "song"
      ? useGetAllSongReviewsByIdQuery(Number(id))
      : typeId === "album"
      ? useGetAllAlbumReviewsByIdQuery(Number(id))
      : typeId === "artist"
      ? useGetAllArtistReviewsByIdQuery(Number(id))
      : useGetAllReviewsQuery();

  const { data: song } =
    typeId === "song" ? useGetSongByIdQuery(Number(id)) : { data: null };
  const { data: album } =
    typeId === "album" ? useGetAlbumByIdQuery(Number(id)) : { data: null };
  const { data: artist } =
    typeId === "artist" ? useGetUserByIdQuery(Number(id)) : { data: null };

  return (
    <>
      <SeeAllTitle>
        {language.reviews}{" "}
        <SeeAllCount>{`(${!!reviews ? reviews?.length : 0})`}</SeeAllCount>
      </SeeAllTitle>

      <ReviewList>
        {isLoading ? (
          <ReviewLoading />
        ) : (
          reviews?.map((item) => {
            if (!item) return null;

            const review = "review" in item ? item.review : item;

            return (
              <Reviews
                key={review.id}
                review={review}
                artist={artist?.artist ?? undefined}
                album={album?.album ?? undefined}
                song={song ?? undefined}
                isLoading={isLoading}
              />
            );
          })
        )}
      </ReviewList>
    </>
  );
};
