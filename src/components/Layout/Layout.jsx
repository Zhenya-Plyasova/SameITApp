import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Layout.module.css';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      <div className={css.mainWrapper}>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
