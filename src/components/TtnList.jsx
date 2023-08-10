import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const TtnList = ({ ttnList }) => {
 return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {ttnList.map(ttnItem => (
            <ListItem disablePadding key={ttnItem}>
              <ListItemButton onClick={() => console.log(ttnItem)}>
                <ListItemText primary={ttnItem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
