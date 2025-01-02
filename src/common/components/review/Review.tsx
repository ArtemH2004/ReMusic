import {
  ReviewAuthorColumnWrapper,
  ReviewAuthorImg,
  ReviewAuthorName,
  ReviewAuthorTime,
  ReviewContentWrapper,
  ReviewDescription,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewItem,
  ReviewLikesCount,
} from "@/common/components/review/styles";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ReviewStatistic } from "./ReviewStatistic";

export const Review = () => {
  return (
    <ReviewItem>
      <ReviewHeader>
        <ReviewHeaderWrapper>
          <ReviewAuthorImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWjV5eHQ4jEfGLgjEBwNo6flSxPzl3cLIjg&s"
            alt="Kizaru"
          />
          <ReviewAuthorColumnWrapper>
            <ReviewAuthorName>Kizaru</ReviewAuthorName>
            <ReviewAuthorTime>31.12.2024</ReviewAuthorTime>
          </ReviewAuthorColumnWrapper>
        </ReviewHeaderWrapper>

        <ReviewHeaderWrapper>
          <ReviewLikesCount>52</ReviewLikesCount>
          <ButtonWithIcon size={45} icon={"player/add"} title="Добавить" />
        </ReviewHeaderWrapper>
      </ReviewHeader>

      <ReviewContentWrapper>
        <ReviewDescription>
          2021: Bandana I Основная статья: Bandana I Bandana I (или просто
          Bandana) — совместный студийный альбом российских рэп-исполнителей Big
          Baby Tape и Kizaru . Выпущен 22 октября 2021 года на лейбле Sony Music
          Russia. В этом альбоме сочетается звук растущей звезды из России (Big
          Baby Tape) и уже давно вступившего в рэп сцену Олега KIZARU. Сам
          альбом наполнен большим количеством известных сэмплов и новых
          звучаний. Альбом набрал миллион прослушиваний ВКонтакте за 15 минут и
          три миллиона прослушиваний спустя час после релиза. Через сутки
          количество прослушиваний достигло 18 миллионов. 2022: First Day Out и
          «Тебя любят там где меня нет» 30 июня 2022 года Kizaru провёл прямой
          эфир, в котором сообщил о выходе нового альбома в полночь под
          названием First Day Out. «Я потратил на этот проект больше года.
          Некоторые треки лежали очень долго и я их никому не показывал. Решил,
          что пришло время», сообщил исполнитель в социальных сетях. Альбом
          вдохновлён мемфис-музыкой и музыкой объединения Paper Route Empire,
          которым руководил погибший в 2021 году Young Dolph; «Новым мемфисом.
          Не старым-лоуфайным. Жирный трэп-вэйв. Я был вдохновлён артистами
          Paper Route Empire, Key Glock, Young Dolph, Big Moochie Grape, Kenny
          Munie и т.д». добавил артист[3]. В конце октября 2022 года Kizaru
          сообщил о выходе сольного студийного альбома в ноябре[4]. 18 ноября
          2022 года вышел восьмой студийный альбом «Тебя любят там где меня
          нет»[5].
        </ReviewDescription>

        <ReviewStatistic />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
