import { HomePage } from "@/modules/user/home/HomePage";
import { PageWrapper } from "@/modules/user/PageWrapper";
import { PlaylistPage } from "@/modules/user/playlist/PlaylistPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<>Search</>} />
          {/* TODO */}
          <Route path="library" element={<>Library</>}>
            <Route index element={<Navigate to="/library?foo=playlists" />} />
          </Route>
          <Route path="playlist" element={<PlaylistPage />} />
          <Route path="album" element={<>Album</>} />
        </Route>
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
