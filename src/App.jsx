import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

import { Layout } from "components/Layout/Layout";

const HomePage = lazy(() => import('./pages/Home'));
const OfficesList = lazy(() => import('./pages/FindOffices'));

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="offices" element={<OfficesList />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
