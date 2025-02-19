import {
  clampWidth,
  flexCenter,
} from "@/common/styles/mixins";
import { borders, colors, device } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { TextLoading } from "./styles";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";

const Item = styled("li")`
  ${clampWidth(300, 500)}
  height: 82px;
  background-color: ${colors.whiteActive};
  border-radius: ${borders.smallBorderRadius};

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  @media ${device.mobile} {
    height: 70px;
    column-gap: 15px;
  }

  @media ${device.mobileL} {
    height: 60px;
  }
`;

const Wrapper = styled("div")<{ $isRightPadding?: boolean }>`
  ${flexCenter}
  column-gap: 15px;
  height: 100%;
  padding-right: ${(props) => (props.$isRightPadding ? 20 : 0)}px;

  @media ${device.mobile} {
    column-gap: 10px;
  }
`;

const ColumnWrapper = styled("div")`
  ${clampWidth(50, 125)}
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Img = styled("div")`
  height: 100%;
  aspect-ratio: 1;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.blackLoading};
`;

export const SongItemLoading = () => {
  return (
    <Item>
      <Wrapper>
        <Img />

        <ColumnWrapper>
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={15} $width="100%" />
        </ColumnWrapper>
      </Wrapper>

      <Wrapper $isRightPadding={true}>
        <RaitingLoading />
        <TextLoading $height={15} $width={"30px"} />
      </Wrapper>
    </Item>
  );
};
