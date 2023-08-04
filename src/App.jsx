import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

import { Layout } from "components/Layout/Layout";

const HomePage = lazy(() => import('./pages/Home'));

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
