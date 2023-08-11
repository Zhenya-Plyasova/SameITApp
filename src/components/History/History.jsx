import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TtnList } from 'components/TtnList';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function HistoryBlock({ ttnList, onClick, onButtonClick }) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{
        m: 3,
        border: '1px dashed grey',
        borderRadius: 2,
        overflow: 'auto',
        maxWidth: 435,
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      elevation={3}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {ttnList.length > 0 && (
        <>
          <TtnList ttnList={ttnList} onButtonClick={onButtonClick} />
          <Button sx={{ m: 1 }} onClick={onClick}>
            Очистити
          </Button>
        </>
      )}
    </Box>
  );

  return (
    <div>
      {ttnList.length > 0 && (
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}>{'Історія'}</Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      )}
    </div>
  );
}
