import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
// import css from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header >
      <nav style={{paddingTop: 10, paddingBottom: 10}}>
        <NavLink to="/" type="button">
          <Button variant="outlined" sx={{m: 1}}>
            Перевірити ТТН
          </Button>
        </NavLink>

        <NavLink to="/offices">
          <Button variant="outlined">
            Список відділень
          </Button>
        </NavLink>
      </nav>
    </header>
  );
};
