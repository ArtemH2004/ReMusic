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
          <Route path="album" element={<AlbumPage />} />
        </Route>
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
