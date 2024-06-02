import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const __MAIN__ = lazy(() => import("../../pages/index"));
const __MAIN_HOME__ = lazy(() => import("../../pages/main/contents/home/home"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<__MAIN__ />} >
          <Route index element={<__MAIN_HOME__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
