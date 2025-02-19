import { flexCenter } from "@/common/styles/mixins";
import { borders, colors, device, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { TextLoading } from "@/common/components/loading/styles";

const Item = styled("li")`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 20px;
  margin-inline: auto;

  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;

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

const Img = styled("div")`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackLoading};
  box-shadow: ${shadows.defaultShadow};
`;

export const ArtistItemLoading = () => {
  return (
    <Item>
      <Img />
      <TextLoading $width={75} $height={17} />
      <ReviewRaiting value={52} />
    </Item>
  );
};
