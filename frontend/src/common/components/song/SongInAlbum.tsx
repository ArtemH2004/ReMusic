import {
  clampText,
  flexCenter,
  hoverActive,
  linkHoverActive,
  resetButton,
  resetLink,
  square,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useState } from "react";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Song } from "@/store/reducers/song/types";
import { getImgByName } from "@/common/helpers/getImgByName";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { Link } from "react-router-dom";

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
  border-radius: ${borders.smallBorderRadius};

  ${hoverActive}

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
  row-gap: 2px;
`;

const TitleLink = styled(Link)`
  ${resetLink}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
  ${linkHoverActive}
`;

const ArtistLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  ${linkHoverActive}
`;

const ButtonsWrapper = styled(Wrapper)`
  @media ${device.mobileL} {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${flexCenter}
`;

interface SongInAlbumProps {
  index: number;
  song: Song;
}

export const SongInAlbum = ({ index, song }: SongInAlbumProps) => {
  const { data: artist } = useGetUserByIdQuery(song.artist_id);
  const [isHover, setHover] = useState(false);
  const img = getImgByName(song.photo);
  const language = getLanguage();

  return (
    <Item>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Wrapper>
          <Number>{index}</Number>
          <Img src={img} alt={song.name} />

          <ColumnWrapper>
            <TitleLink to={`/song/${song.id}`}>{song.name}</TitleLink>
            <ArtistLink to={`/artist/${artist?.id}`}>
              {artist?.username}
            </ArtistLink>
          </ColumnWrapper>
        </Wrapper>
        <Wrapper>
          <ButtonsWrapper>
            {isHover ? (
              <>
                <NavLink to={`/song/${song.id}`}>
                  <ButtonWithIcon
                    size={40}
                    icon={"player/open"}
                    title={language.goto}
                  />
                </NavLink>
                <ButtonWithIcon
                  size={40}
                  icon={"player/add"}
                  title={language.add}
                />
              </>
            ) : (
              <ReviewRaiting value={song.rating} />
            )}
          </ButtonsWrapper>
          <Time>2:12</Time>
        </Wrapper>
      </Button>
    </Item>
  );
};
