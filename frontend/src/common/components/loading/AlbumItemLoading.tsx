import { borders, colors, device } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { ImgCoverLoading } from "@/common/components/loading/ImgCoverLoading";
import { TextLoading } from "@/common/components/loading/styles";

const Item = styled("li")<{ $isAccentColor?: boolean }>`
  width: 100%;
  max-width: 300px;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${(props) =>
    props.$isAccentColor ? colors.whiteActive : colors.blackCover};
  border-radius: ${borders.smallBorderRadius};
`;

const Wrapper = styled("div")`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media ${device.mobileL} {
    padding: 15px;
  }

  @media ${device.mobileM} {
    padding: 10px;
  }
`;

interface AlbumItemProps {
  isAccentColor?: boolean;
}

export const AlbumItemLoading = ({ isAccentColor }: AlbumItemProps) => {
  const img = "/public/images/default-album.svg";

  return (
    <Item $isAccentColor={isAccentColor}>
      <ImgCoverLoading img={img} />

      <Wrapper>
        <TextLoading $height={15} $width="70%" />
        <TextLoading $height={12} />
        <TextLoading $height={12} />
      </Wrapper>
    </Item>
  );
};
