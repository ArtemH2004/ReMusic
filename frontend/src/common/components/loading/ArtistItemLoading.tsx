import { flexCenter } from "@/common/styles/mixins";
import { borders, colors, device, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { TextLoading } from "@/common/components/loading/styles";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";

const Item = styled("li")<{ $isAccentColor?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 20px;
  margin-inline: auto;

  ${flexCenter}
  flex-direction: column;
  row-gap: 15px;

  background-color: ${(props) =>
    props.$isAccentColor ? colors.whiteActive : colors.blackCover};
  border-radius: ${borders.smallBorderRadius};

  @media ${device.mobileL} {
    padding: 15px;
  }

  @media ${device.mobileM} {
    padding: 10px;
    row-gap: 5px;
  }
`;

const Img = styled("img")`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${borders.circleBorderRadius};
  box-shadow: ${shadows.defaultShadow};
`;

interface ArtistItemProps {
  isAccentColor?: boolean;
}

export const ArtistItemLoading = ({isAccentColor}: ArtistItemProps) => {
  const img = '/public/images/default-user.svg';


  return (
    <Item $isAccentColor={isAccentColor}>
      <Img src={img} />
      <TextLoading $width={'75%'} $height={17} />
      <RaitingLoading />
    </Item>
  );
};
