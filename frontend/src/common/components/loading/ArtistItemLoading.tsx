import { flexCenter } from "@/common/styles/mixins";
import { borders, colors, device, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { TextLoading } from "@/common/components/loading/styles";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";

const Item = styled("li")`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 20px;
  margin-inline: auto;

  ${flexCenter}
  flex-direction: column;
  row-gap: 15px;

  background-color: ${colors.blackCover};
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

export const ArtistItemLoading = () => {
  return (
    <Item>
      <Img src='/public/images/default-user.svg' />
      <TextLoading $width={'75%'} $height={17} />
      <RaitingLoading />
    </Item>
  );
};
