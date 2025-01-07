import { Song } from "@/common/components/song/Song"
import { getLanguage } from "@/common/helpers/getLanguage";
import { HomeNewList, HomeNewSection, HomeNewTitle } from "@/modules/user/home/styles"

export const HomeNew = () => {
  const language = getLanguage();
  
  return (
    <HomeNewSection>
        <HomeNewTitle>{language.newSongs}</HomeNewTitle>
        <HomeNewList>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />            
            <Song />
            <Song />
            <Song />
            <Song />
        </HomeNewList>
    </HomeNewSection>
  )
}
