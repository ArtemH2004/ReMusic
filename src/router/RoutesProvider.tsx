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

export default function RoutesProvider() {
  const authorizedUser = true;

  const unAuthorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="authentication/" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="forgot" element={<ForgotPassword />} />
          <Route path="change" element={<ChangePassword />} /> */}
        </Route>
        <Route
          path="*"
          element={<Navigate to="/authentication/register" replace />}
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
          <Route path="search" element={<>Search</>} />
          <Route path="library" element={<LibraryPage />}>
            <Route index element={<Navigate to="/library?foo=songs" />} />
          </Route>
          <Route path="album" element={<AlbumPage />} />
          <Route path="artist" element={<ArtistPage />} />
          <Route path="song" element={<SongPage />} />
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
