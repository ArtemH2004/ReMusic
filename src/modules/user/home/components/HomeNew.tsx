import { Song } from "@/common/components/song/Song"
import { HomeNewList, HomeNewSection, HomeNewTitle } from "@/modules/user/home/styles"

export const HomeNew = () => {
  return (
    <HomeNewSection>
        <HomeNewTitle>New Songs</HomeNewTitle>
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
