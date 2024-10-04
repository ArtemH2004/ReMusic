import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<>Home</>} />
          <Route path="search" element={<>Search</>} />
          <Route path="library" element={<>Library</>} />
        </Route>
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
