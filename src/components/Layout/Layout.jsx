import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import CircularIndeterminate from 'components/СircularIndeterminate';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Layout.module.css';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      <div className={css.mainWrapper}>
        <Navigation />
        <Suspense fallback={<CircularIndeterminate/>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
