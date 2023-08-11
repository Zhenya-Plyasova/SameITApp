import { NavLink, useLocation } from 'react-router-dom';
import * as React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const Navigation = () => {
    const location = useLocation();

    const [alignment, setAlignment] = React.useState('home');
    React.useEffect(() => {
      if (location.pathname === '/') {
        setAlignment('home');
      } else if (location.pathname === '/offices') {
        setAlignment('offices');
      }
    }, [location]);
      const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    
  return (
    <header style={{ display: 'flex', justifyContent: 'center'}}>
      <nav style={{ paddingTop: 20, paddingLeft: 10, paddingBottom: 10 }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="home">
            <NavLink to="/" style={{ color: 'inherit' }}>
              Перевірити ТТН
            </NavLink>
          </ToggleButton>
          <ToggleButton value="offices" color="primary">
            <NavLink to="/offices" style={{ color: 'inherit' }}>
              Список відділень{' '}
            </NavLink>
          </ToggleButton>
        </ToggleButtonGroup>
      </nav>
    </header>
  );
};
