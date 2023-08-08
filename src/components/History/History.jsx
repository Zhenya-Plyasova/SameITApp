import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { TtnList } from 'components/TtnList';

export default function HistoryBlock() {
  return (
    <Box
      sx={{
        m: 1,
        border: '1px dashed grey',
        borderRadius: 2,
        maxWidth: 435,
      }}
    >
      <Typography variant="h6" color="primary"
      sx={{ml:1}}>
        Історія
      </Typography>
      <TtnList/>
      <Button>Очистити</Button>
    </Box>
  );
}
