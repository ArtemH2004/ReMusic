import { useGetAllAlbumsQuery } from "@/store/reducers/album/albumApi";
import {
  SeeAllAlbumsList,
  SeeAllCount,
  SeeAllTitle,
} from "@/modules/user/see-all/styles";
import { AlbumItemLoading } from "@/common/components/loading/AlbumItemLoading";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { Album } from "@/store/reducers/album/types";
import { UserFullInfo } from "@/store/reducers/user/types";
import { getLanguage } from "@/common/helpers/getLanguage";

export const SeeAllAlbums = () => {
  const language = getLanguage();
  const { id } = useParams<{ id: string }>();
  const isUserIdZero = id === "all";

  const { data, isLoading } = isUserIdZero
    ? useGetAllAlbumsQuery()
    : useGetUserByIdQuery(Number(id));

  const albums = isUserIdZero
    ? (data as Album[])
    : (data as UserFullInfo)?.albums;

  return (
    <>
      <SeeAllTitle>
        {language.albums}{" "}
        <SeeAllCount>{`(${!!albums ? albums?.length : 0})`}</SeeAllCount>
      </SeeAllTitle>

      <SeeAllAlbumsList>
        {isLoading ? (
          <>
            <AlbumItemLoading />
            <AlbumItemLoading />
            <AlbumItemLoading />
            <AlbumItemLoading />
          </>
        ) : (
          !!albums &&
          albums.map((album) => <AlbumItem key={album.id} album={album} />)
        )}
      </SeeAllAlbumsList>
    </>
  );
};
