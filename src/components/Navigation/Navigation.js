import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';

const StyledLink = styled(Button)`
  color: black;

  &.active {
    color: blueviolet;
  }
`;

export const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" type="button">
          <StyledLink variant="outlined">
            Перевірити ТТН
          </StyledLink>
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
