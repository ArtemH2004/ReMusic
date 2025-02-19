import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
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
  AlbumPageInfoWrapper,
  AlbumPageInfoButtonsWrapper,
  AlbumPageRaitingWrapper,
  AlbumPageContentSection,
  AlbumPageHeader,
  AlbumPageListTitle,
} from "@/modules/user/album/styles";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { Review } from "@/common/components/review/Review";
import { useEffect, useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useGetAlbumByIdQuery } from "@/store/reducers/album/albumApi";
import { useParams } from "react-router-dom";
import { getImgByName } from "@/common/helpers/getImgByName";
import { AlbumPageLoading } from "@/common/components/loading/AlbumPageLoading";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { useGetAllSongsQuery } from "@/store/reducers/song/songApi";
import { changeTitle } from "@/common/helpers/changeTitle";

const defaultAlbumImg = "/public/images/default-album.svg";

export const AlbumPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { data: album, isLoading: isAlbumLoading } = useGetAlbumByIdQuery(Number(id));
  const {data: song, isLoading: isSongLoading} = useGetAllSongsQuery();
  const {data: artist} = useGetUserByIdQuery(album?.artist_id || 0);
  const img = !!album?.photo ? getImgByName(album.photo) : defaultAlbumImg;
  const accentColor = getImgAccentColor(img);
  const year = getYearFromDate(album?.created_at);
  const songsList = song?.filter((song) => song.album_id === Number(id)) || [];
  //TODO Review
  const isReviewLoading = true;
  const isLoading = isAlbumLoading && isSongLoading && isReviewLoading;

  const language = getLanguage();

    useEffect(() => {
      scrollToTop();
      changeTitle("album");
    }, []);

  return (
    <>
      {isModalReviewOpen && (
        <Modal
          title={language.writeReview}
          isOpen={isModalReviewOpen}
          setOpen={setModalReviewOpen}
          children={<ModalReview />}
        />
      )}
      {isLoading ? (
        <AlbumPageLoading />
      ) : (
        <AlbumPageSection $accentColor={accentColor}>
          <AlbumPageContentWrapper>
            <ImgCover
              img={img}
              title={album?.name || ""}
              artist={artist?.username || ""}
              year={year}
              isButtonsActive={false}
            />

            <AlbumPageInnerWrapper>
              <AlbumPageSubtitle>{language.album}</AlbumPageSubtitle>
              <AlbumPageTitle>{album?.name}</AlbumPageTitle>
              <AlbumPageSubtitleLink to={`/artist/${artist?.id}`}>{artist?.username}</AlbumPageSubtitleLink>
              <AlbumPageDescription>{`${songsList.length} ${language.songs} • 34 minutes`}</AlbumPageDescription>
            </AlbumPageInnerWrapper>
          </AlbumPageContentWrapper>

          <AlbumPageSongsWrapper>
            <AlbumPageInfoWrapper>
              <AlbumPageInfoButtonsWrapper>
                <AlbumPageButtonWrapper $accentColor={accentColor}>
                  <ButtonWithIcon
                    size={60}
                    icon={"player/play-white"}
                    title={language.play}
                  />
                </AlbumPageButtonWrapper>
                <ButtonWithIcon
                  size={60}
                  icon={"player/add"}
                  title={language.add}
                />
                <ButtonWithIcon
                  size={60}
                  icon={"player/review"}
                  title={language.writeReview}
                  click={() => setModalReviewOpen(true)}
                />
              </AlbumPageInfoButtonsWrapper>

              <AlbumPageRaitingWrapper>
                <ReviewRaiting value={82} />
              </AlbumPageRaitingWrapper>
            </AlbumPageInfoWrapper>

            <AlbumPageList>
              {songsList?.map((song, index) =>  <SongInAlbum key={song.id} index={index + 1} song={song}/>)}
            </AlbumPageList>

            <AlbumPageContentSection>
              <AlbumPageHeader>
                <AlbumPageListTitle>{language.newReviews}</AlbumPageListTitle>
                <ButtonSeeAll />
              </AlbumPageHeader>

              <Review isAccentColor={true} />
            </AlbumPageContentSection>
          </AlbumPageSongsWrapper>
        </AlbumPageSection>
      )}
    </>
  );
};
