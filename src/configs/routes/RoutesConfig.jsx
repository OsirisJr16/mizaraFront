import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const RoutesConfig = () => {
  const __MAIN__ = lazy(() => import("../../pages/main/Main"));
  return (
    <>
      <Suspense>
        <Routes>
          {/* main pages routes */}
          <Route element={<__MAIN__ />} path="/"></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesConfig;
