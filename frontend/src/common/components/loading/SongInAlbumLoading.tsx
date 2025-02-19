import {
  flexCenter,
  square,
} from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";

const Item = styled("li")`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding-inline: 40px;

  @media ${device.mobile} {
    height: 60px;
    padding-inline: 25px;
  }

  @media ${device.mobileL} {
    padding-inline: 15px;
    column-gap: 20px;
  }

  @media ${device.mobileM} {
    height: 55px;
    padding-inline: 10px;
  }
`;

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;

  @media ${device.mobileL} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

const Img = styled("img")`
  ${square(42)}
  object-fit: cover;
  object-position: center;
`;

const ColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SongInAlbumLoading = () => {
  const defaultSongImg = "/public/images/default-song.svg";

  return (
    <Item>
      <Wrapper>
        <SquareLoading $size={20} />
        <Img src={defaultSongImg} />

        <ColumnWrapper>
        <TextLoading $height={18} $width="150px" />
        <TextLoading $height={15} $width="75px" />
        </ColumnWrapper>
      </Wrapper>
      <Wrapper>
        <RaitingLoading />
        <TextLoading $height={18} $width="50px" />
      </Wrapper>
    </Item>
  );
};
