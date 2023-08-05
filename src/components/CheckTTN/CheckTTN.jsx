import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TtnStatus } from 'components/TTNStatus';
import HistoryBlock from 'components/History/History';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      //   autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Введіть номер ТТН"
        variant="outlined"
      />
      <Button variant="contained">Отримати статус</Button>
          <TtnStatus />
          <HistoryBlock/>
    </Box>
  );
}
