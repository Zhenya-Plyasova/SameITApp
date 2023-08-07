import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBar(props) {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const numericExpression = /^\d{14}$/;
  const ukrainianLettersExpression = /^[А-Яа-яІіЇїЄєҐґ\s]*$/;
  const [isValid, setIsValid] = useState(true);
  console.log(query);

  const updateQueryString = e => {
    e.preventDefault();
    const queryValue = value.trim();

    if (queryValue === '') {
      return setSearchParams({});
    }
    if (props.pattern === 'numeric' && numericExpression.test(queryValue)) {
      setSearchParams({ query: queryValue });
      setIsValid(true);
    } else if (
      props.pattern === 'ukrainian' &&
      ukrainianLettersExpression.test(queryValue)
    ) {
      setSearchParams({ query: queryValue });
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(query);
  };

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    const onlyNumbers = /^[0-9]*$/;
    // const onlyUkrainianSymbols = 
    if (props.pattern === 'numeric' && !onlyNumbers.test(inputValue)) {
        return;
    }
    else if (props.pattern === 'ukrainian' && !ukrainianLettersExpression.test(inputValue)) {
      return;
    }
      setValue(target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      onSubmit={updateQueryString}
    >
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        size="small"
        // pattern={props.pattern}
        inputMode={props.pattern === 'numeric' ? 'numeric' : 'text'}
        required
        onChange={handleChange}
        value={value}
      />
      <Button type="submit" variant="contained">
        {props.buttonText}
      </Button>
      {!isValid && (
        <p style={{ color: 'red' }}>
          Некоректне значення. Будь ласка, перевірте введені дані.
        </p>
      )}
    </Box>
  );
}
