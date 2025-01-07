import {
  clampText,
  clampWidth,
  flexCenter,
  linkHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useState } from "react";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { NavLink } from "react-router-dom";
import { getLanguage } from "@/common/helpers/getLanguage";

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
  display: flex;
  flex-direction: column;
`;

const Title = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
`;

const ArtistLink = styled("a")`
  ${resetLink}
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  ${linkHoverActive}
`;

const ImgWrapper = styled("div")`
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  border-radius: ${borders.smallBorderRadius};
`;

const Img = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
`;

const ImgLink = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${colors.blackShadow};
  ${flexCenter}
`;

const Time = styled("time")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
`;

const Link = styled(NavLink)`
  ${flexCenter}
`;

export const Song = () => {
  const [isHover, setHover] = useState(false);
  const language = getLanguage();

  return (
    <Item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Wrapper>
        <ImgWrapper>
          <Img
            src="https://aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg"
            alt="Song cover"
          />
          {isHover && (
            <ImgLink>
              <ButtonWithIcon
                size={50}
                icon={"player/play-white"}
                title={language.play}
              />
            </ImgLink>
          )}
        </ImgWrapper>

        <ColumnWrapper>
          <Title>Flower Boy</Title>
          <ArtistLink>Tyler the Creator</ArtistLink>
        </ColumnWrapper>
      </Wrapper>

      <Wrapper $isRightPadding={true}>
        {isHover ? (
          <>
            <Link to="/song">
              <ButtonWithIcon size={40} icon={"player/open"} title={language.goto} />
            </Link>
            <ButtonWithIcon size={40} icon={"player/add"} title={language.add} />
          </>
        ) : (
          <ReviewRaiting value={30} />
        )}
        <Time>2:12</Time>
      </Wrapper>
    </Item>
  );
};
