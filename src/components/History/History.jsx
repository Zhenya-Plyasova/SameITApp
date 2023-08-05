import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function HistoryBlock() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Очистити історію</Button>
    </Box>
  );
}
