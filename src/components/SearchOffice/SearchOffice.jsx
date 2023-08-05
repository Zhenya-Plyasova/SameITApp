import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { Autocomplete } from '@mui/material';

export default function SearchOffice() {
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
          label="Введіть назву нас. пункту"
          variant="outlined"
        />
        <Button variant="contained">шукати</Button>
      </Box>
    );
};