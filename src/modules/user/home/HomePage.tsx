import { HomeNew } from "@/modules/user/home/components/HomeNew"
import { HomeAlbums } from "@/modules/user/home/components/HomeAlbums"
import { HomeArtists } from "@/modules/user/home/components/HomeArtists"
import { HomeReviews } from "@/modules/user/home/components/HomeReviews"

export const HomePage = () => {
  return (
    <>
        <HomeNew />
        <HomeArtists />
        <HomeAlbums />
        <HomeReviews />
    </>
  )
}
