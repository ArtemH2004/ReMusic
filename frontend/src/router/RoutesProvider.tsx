import { HomePage } from "@/modules/user/home/HomePage";
import { PageWrapper } from "@/modules/user/PageWrapper";
import { AlbumPage } from "@/modules/user/album/AlbumPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ArtistPage } from "@/modules/user/artist/ArtistPage";
import { SongPage } from "@/modules/user/song/SongPage";
import { LibraryPage } from "@/modules/user/library/LibraryPage";
import { AuthPage } from "@/modules/auth/AuthPage";
import { Register } from "@/modules/auth/components/Register";
import { Login } from "@/modules/auth/components/Login";
import { Error404 } from "@/common/components/error/Error404";
import { SearchPage } from "@/modules/user/search/SearchPage";

export default function RoutesProvider() {
  const authorizedUser = true;

  const unAuthorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="authentication/" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/authentication/login" replace />}
        />
      </>
    )
  );

  const authorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="library" element={<LibraryPage />}>
            <Route index element={<Navigate to="/library?foo=songs" />} />
          </Route>
          <Route path="album/:id" element={<AlbumPage />} />
          <Route path="artist/:id" element={<ArtistPage />} />
          <Route path="song/:id" element={<SongPage />} />
        </Route>
        <Route path="error" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return (
    <RouterProvider
      router={authorizedUser ? authorizedProvider : unAuthorizedProvider}
    />
  );
}
