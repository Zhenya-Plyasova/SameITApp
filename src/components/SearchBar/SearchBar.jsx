import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBar(props) {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
      >
        <TextField
          id="outlined-basic"
          label={props.label}
          variant="outlined"
          size="small"
          pattern={props.pattern}
          required
        />
        <Button variant="contained">{props.buttonText}</Button>
      </Box>
    );
};