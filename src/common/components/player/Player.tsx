import {
  PlayerAdaptiveDisplayBlockWrapper,
  PlayerAdaptiveDisplayNoneWrapper,
  PlayerContentWrapper,
  PlayerControlButtonsWrapper,
  PlayerControlProgress,
  PlayerControlProgressTime,
  PlayerControlProgressWrapper,
  PlayerControlWrapper,
  PlayerInfoArtistLink,
  PlayerInfoColumnWrapper,
  PlayerInfoSongImg,
  PlayerInfoTitle,
  PlayerInfoWrapper,
  PlayerSection,
} from "@/common/components/player/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";

export const Player = () => {
  const language = getLanguage();

  return (
    <PlayerSection>
      <PlayerContentWrapper>
        <PlayerInfoWrapper>
            <PlayerAdaptiveDisplayBlockWrapper>
                <PlayerInfoSongImg src="https://i.pinimg.com/736x/2a/5e/a2/2a5ea249f33a3346e55319214ee8ec91.jpg" alt="Song" />
            </PlayerAdaptiveDisplayBlockWrapper>
          <PlayerInfoColumnWrapper>
            <PlayerInfoTitle>Play It Safe</PlayerInfoTitle>
            <PlayerInfoArtistLink>Julia Wolf</PlayerInfoArtistLink>
          </PlayerInfoColumnWrapper>

          <PlayerAdaptiveDisplayNoneWrapper>
            <ButtonWithIcon size={40} icon="player/add" title={language.add} />
          </PlayerAdaptiveDisplayNoneWrapper>
        </PlayerInfoWrapper>

        <PlayerAdaptiveDisplayNoneWrapper>
          <PlayerControlWrapper>
            <PlayerControlButtonsWrapper>
              <ButtonWithIcon
                size={35}
                icon="player/shuffle"
                title={language.shuffle}
              />
              <ButtonWithIcon
                size={35}
                icon="player/before"
                title={language.previous}
              />
              <ButtonWithIcon
                size={35}
                icon="player/play-white"
                title={language.play}
              />
              <ButtonWithIcon
                size={35}
                icon="player/after"
                title={language.next}
              />
              <ButtonWithIcon
                size={35}
                icon="player/repeat"
                title={language.repeat}
              />
            </PlayerControlButtonsWrapper>

            <PlayerControlProgressWrapper>
              <PlayerControlProgressTime>2:39</PlayerControlProgressTime>
              <PlayerControlProgress />
              <PlayerControlProgressTime>4:22</PlayerControlProgressTime>
            </PlayerControlProgressWrapper>
          </PlayerControlWrapper>
        </PlayerAdaptiveDisplayNoneWrapper>

        <PlayerAdaptiveDisplayNoneWrapper>
          <PlayerControlButtonsWrapper>
            <ButtonWithIcon
              size={40}
              icon="player/open"
              title={language.goto}
            />
            <ButtonWithIcon size={40} icon="close" title={language.close} />
          </PlayerControlButtonsWrapper>
        </PlayerAdaptiveDisplayNoneWrapper>

        <PlayerAdaptiveDisplayBlockWrapper>
          <PlayerControlButtonsWrapper>
            <ButtonWithIcon size={32} icon="player/add" title={language.add} />
            <ButtonWithIcon
              size={32}
              icon="player/play-white"
              title={language.play}
            />
            <ButtonWithIcon
              size={32}
              icon="player/open"
              title={language.goto}
            />
          </PlayerControlButtonsWrapper>
        </PlayerAdaptiveDisplayBlockWrapper>
      </PlayerContentWrapper>
    </PlayerSection>
  );
};
