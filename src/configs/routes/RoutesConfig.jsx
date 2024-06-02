import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const __MAIN__ = lazy(() => import("../../pages/index"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<__MAIN__ />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
