import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { TtnList } from 'components/TtnList';

export default function HistoryBlock({ ttnList, onClick }) {
  return (
    <Box
      sx={{
        m: 1,
        border: '1px dashed grey',
        borderRadius: 2,
        maxWidth: 435,
      }}
    >
      <Typography variant="h6" color="primary" sx={{ ml: 1 }}>
        Історія
      </Typography>
      {ttnList.length && (
        <>
          <TtnList ttnList={ttnList} />
          <Button onClick={onClick}>Очистити</Button>
        </>
      )}
    </Box>
  );
}
