import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.mainWrapper}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
