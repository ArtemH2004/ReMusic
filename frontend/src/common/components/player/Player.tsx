import {
  PlayerAdaptiveDisplayBlockWrapper,
  PlayerAdaptiveDisplayNoneWrapper,
  PlayerContentWrapper,
  PlayerControlButtonLink,
  PlayerControlButtonsWrapper,
  PlayerControlProgressInput,
  PlayerControlProgressTime,
  PlayerControlProgressWrapper,
  PlayerControlWrapper,
  PlayerInfoArtistLink,
  PlayerInfoColumnWrapper,
  PlayerInfoSongImg,
  PlayerInfoTitleLink,
  PlayerInfoWrapper,
  PlayerSection,
} from "@/common/components/player/styles";
import { formatDuration } from "@/common/helpers/formatDuration";
import { getImgByName } from "@/common/helpers/getImgByName";
import { getLanguage } from "@/common/helpers/getLanguage";
import { getMusicByName } from "@/common/helpers/getMusicByName";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  useDeleteFavoriteArtistMutation,
  usePostFavoriteArtistMutation,
} from "@/store/reducers/favorite/favoriteArtistApi";
import { useGetSongByIdQuery } from "@/store/reducers/song/songApi";
import { songActions } from "@/store/reducers/song/songSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const defaultSongImg = "/public/images/default-song.svg";

export const Player = () => {
  const language = getLanguage();
  const dispatch = useDispatch();
  const { songList, songPlayer, songSettings } = useAppSelector(
    (state) => state.songReducer
  );
  const img = !!songPlayer ? getImgByName(songPlayer.photo) : defaultSongImg;
  const music = !!songPlayer && getMusicByName(songPlayer.music);

  const [currentSongIndex, setCurrentSongIndex] = useState(
    songList.indexOf(songPlayer.id)
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState(songPlayer.liked);
  const [setFavorite] = usePostFavoriteArtistMutation();
  const [deleteFavorite] = useDeleteFavoriteArtistMutation();

  const { data: currentSongData } = useGetSongByIdQuery(
    songList[currentSongIndex]
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current!.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const totalDuration = audioRef.current.duration;

      setCurrentTime(current);
      setDuration(totalDuration);

      if (current >= totalDuration && !songSettings.isRepeatable) {
        handleNext();
      }
    }
  };

  const handlePlay = () => {
    if (!songSettings.isPlaying) {
      audioRef.current?.play();
      dispatch(songActions.setPlaying(true));
    }
  };

  const handlePause = () => {
    audioRef.current?.pause();
    dispatch(songActions.setPlaying(false));
  };

  const handlePlayPause = () => {
    songSettings.isPlaying ? handlePause() : handlePlay();
  };

  const handlePrevious = () => {
    const newIndex =
      currentSongIndex - 1 < 0 ? songList.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentSongIndex + 1) % songList.length;
    setCurrentSongIndex(newIndex);
  };

  const handleRepeat = () => {
    if (!songSettings.isRepeatable) {
      dispatch(songActions.updateSongSettingsRepeatable(true));
    } else {
      dispatch(songActions.updateSongSettingsRepeatable(false));
    }
  };

  const handleShuffle = () => {
    const id = songPlayer.id;
    dispatch(songActions.updateSongSettingsShuffled());
    setCurrentSongIndex(songList.indexOf(id));
  };

  const handleClose = () => {
    dispatch(songActions.clearSongPlayer());
  };

  useEffect(() => {
    setLiked(songPlayer.liked);
  }, [songPlayer.liked]);

  const handleFavoriteClick = () => {
    if (!!songPlayer) {
      if (!liked) {
        setFavorite(songPlayer.id).then(() => setLiked(true));
      } else {
        deleteFavorite(songPlayer.id).then(() => setLiked(false));
      }
    }
  };

  useEffect(() => {
    if (currentSongData) {
      dispatch(songActions.updateSongPlayer(currentSongData));
    }
  }, [currentSongData, dispatch]);

  useEffect(() => {
    if (songSettings.isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [songSettings.isPlaying]);

  useEffect(() => {
    const newIndex = songList.indexOf(songPlayer.id);
    if (newIndex !== -1) {
      setCurrentSongIndex(newIndex);
    } else {
      setCurrentSongIndex(0);
    }
  }, [songList, songPlayer.id]);

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef.current]);

  useEffect(() => {
    if (songPlayer) {
      audioRef.current!.src = getMusicByName(songPlayer.music);
      if (songSettings.isPlaying) {
        audioRef.current?.play();
      }
    }
  }, [songPlayer]);

  return (
    <PlayerSection>
      <PlayerContentWrapper>
        <PlayerInfoWrapper>
          <PlayerAdaptiveDisplayBlockWrapper>
            <PlayerInfoSongImg src={img} alt={songPlayer?.name} />
          </PlayerAdaptiveDisplayBlockWrapper>
          <PlayerInfoColumnWrapper>
            <PlayerInfoTitleLink to={`song/${songPlayer?.id}`}>
              {songPlayer?.name}
            </PlayerInfoTitleLink>
            <PlayerInfoArtistLink to={`artist/${songPlayer?.artist_id}`}>
              {songPlayer?.artist_name}
            </PlayerInfoArtistLink>
          </PlayerInfoColumnWrapper>
        </PlayerInfoWrapper>

        <PlayerAdaptiveDisplayNoneWrapper>
          <PlayerControlWrapper>
            <PlayerControlButtonsWrapper>
              <ButtonWithIcon
                size={35}
                icon={`player/shuffle-${
                  songSettings.isShuffled ? "on" : "off"
                }`}
                title={language.shuffle}
                click={handleShuffle}
              />
              <ButtonWithIcon
                size={35}
                icon="player/before"
                title={language.previous}
                click={handlePrevious}
              />
              <ButtonWithIcon
                size={35}
                icon={`player/${
                  songSettings.isPlaying ? "pause" : "play"
                }-white`}
                title={songSettings.isPlaying ? language.stop : language.play}
                click={handlePlayPause}
              />
              <ButtonWithIcon
                size={35}
                icon="player/after"
                title={language.next}
                click={handleNext}
              />
              <ButtonWithIcon
                size={35}
                icon={`player/repeat-${
                  songSettings.isRepeatable ? "on" : "off"
                }`}
                title={language.repeat}
                click={handleRepeat}
              />
            </PlayerControlButtonsWrapper>

            <PlayerControlProgressWrapper>
              <PlayerControlProgressTime>
                {formatDuration(currentTime)}
              </PlayerControlProgressTime>
              <audio
                ref={audioRef}
                src={music}
                autoPlay={songSettings.isPlaying}
                loop={songSettings.isRepeatable}
                preload="metadata"
              />
              <PlayerControlProgressInput
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                $trackWidth={(currentTime / duration) * 100}
              />

              <PlayerControlProgressTime>
                {formatDuration(duration)}
              </PlayerControlProgressTime>
            </PlayerControlProgressWrapper>
          </PlayerControlWrapper>
        </PlayerAdaptiveDisplayNoneWrapper>

        <PlayerAdaptiveDisplayNoneWrapper>
          <PlayerControlButtonsWrapper>
            <ButtonWithIcon
              size={40}
              icon={liked ? "player/delete" : "player/add"}
              title={liked ? language.delete : language.add}
              click={handleFavoriteClick}
            />

            <PlayerControlButtonLink to={`song/${songPlayer?.id}`}>
              <ButtonWithIcon
                size={40}
                icon="player/open"
                title={language.goto}
              />
            </PlayerControlButtonLink>
            <ButtonWithIcon
              size={40}
              icon="close"
              title={language.close}
              click={handleClose}
            />
          </PlayerControlButtonsWrapper>
        </PlayerAdaptiveDisplayNoneWrapper>

        <PlayerAdaptiveDisplayBlockWrapper>
          <PlayerControlButtonsWrapper>
            <ButtonWithIcon
              size={32}
              icon={liked ? "player/delete" : "player/add"}
              title={liked ? language.delete : language.add}
              click={handleFavoriteClick}
            />
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
