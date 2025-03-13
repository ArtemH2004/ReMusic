import {
  useGetAllAlbumReviewsByIdQuery,
  useGetAllArtistReviewsByIdQuery,
  useGetAllReviewsByUserIdQuery,
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
import { Review, ReviewArtistAlbumSong } from "@/store/reducers/review/types";

export const SeeAllReviews = () => {
  const language = getLanguage();
  const { typeId, id } = useParams<{ typeId: string; id: string }>();
  const { data: reviewsData, isLoading } =
    typeId === "song"
      ? useGetAllSongReviewsByIdQuery(Number(id))
      : typeId === "album"
      ? useGetAllAlbumReviewsByIdQuery(Number(id))
      : typeId === "artist"
      ? useGetAllArtistReviewsByIdQuery(Number(id))
      : typeId === "user"
      ? useGetAllReviewsByUserIdQuery(Number(id))
      : useGetAllReviewsQuery();

  const { data: song } =
    typeId === "song" ? useGetSongByIdQuery(Number(id)) : { data: null };
  const { data: album } =
    typeId === "album" ? useGetAlbumByIdQuery(Number(id)) : { data: null };
  const { data: artist } =
    typeId === "artist" ? useGetUserByIdQuery(Number(id)) : { data: null };

  const reviews =
    typeId === "artist" || typeId === "album" || typeId === "song"
      ? (reviewsData as Review[])
      : (reviewsData as ReviewArtistAlbumSong[]);

  return (
    <>
      <SeeAllTitle>
        {typeId === "user" ? language.yourReviews : language.reviews}{" "}
        <SeeAllCount>{`(${!!reviews ? reviews.length : 0})`}</SeeAllCount>
      </SeeAllTitle>

      <ReviewList>
        {isLoading ? (
          <ReviewLoading />
        ) : (
          reviews?.map((item) => {
            if (
              typeId === "artist" ||
              typeId === "album" ||
              typeId === "song"
            ) {
              const reviewItem = item as Review;
              return (
                <Reviews
                  key={reviewItem.id}
                  review={reviewItem}
                  artist={artist?.artist ?? undefined}
                  album={album?.album ?? undefined}
                  song={song ?? undefined}
                  isLoading={isLoading}
                />
              );
            } else {
              const reviewItem = item as ReviewArtistAlbumSong;
              return (
                <Reviews
                  key={reviewItem.review.id}
                  review={reviewItem.review}
                  artist={reviewItem.artist ?? artist?.artist ?? undefined}
                  album={reviewItem.album ?? album?.album ?? undefined}
                  song={reviewItem.song ?? song ?? undefined}
                  isLoading={isLoading}
                />
              );
            }
          })
        )}
      </ReviewList>
    </>
  );
};
