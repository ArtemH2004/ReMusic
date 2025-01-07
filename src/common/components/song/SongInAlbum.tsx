import {
  clampText,
  flexCenter,
  hoverActive,
  linkHoverActive,
  resetButton,
  resetLink,
  square,
} from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useState } from "react";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { getLanguage } from "@/common/helpers/getLanguage";

const Item = styled("li")``;

const Button = styled("button")`
  ${resetButton}
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding-inline: 40px;

  ${hoverActive}
`;

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;
`;

const Number = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

const Time = styled("time")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
`;

const Img = styled("img")`
  ${square(42)}
  object-fit: cover;
  object-position: center;
`;

const ColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Number)`
  color: ${colors.whiteTotal};
`;

const ArtistLink = styled("a")`
  ${resetLink}
  width: fit-content;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  ${linkHoverActive}
`;

export const SongInAlbum = () => {
  const [isHover, setHover] = useState(false);
  const language = getLanguage();
  
  return (
    <Item>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Wrapper>
          <Number>1</Number>
          <Img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/220px-Drake_and_21_Savage_-_Her_Loss.png"
            alt="Song cover"
          />

          <ColumnWrapper>
            <Title>2 Freaky Girls</Title>
            <ArtistLink>21 Savage</ArtistLink>
          </ColumnWrapper>
        </Wrapper>
        <Wrapper>
          {isHover ? (
            <>
              <ButtonWithIcon size={40} icon={"player/open"} title={language.goto} />
              <ButtonWithIcon size={40} icon={"player/add"} title={language.add} />
            </>
          ) : (<ReviewRaiting value={100} />)}
          <Time>2:12</Time>
        </Wrapper>
      </Button>
    </Item>
  );
};
