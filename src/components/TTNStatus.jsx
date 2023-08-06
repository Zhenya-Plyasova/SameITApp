import Box from '@mui/material/Box';

export const TtnStatus = () => {
  return (
    <Box
        sx={{
        m:1,
        maxWidth: 435,
        height: 300,
        marginBottom: '8px',
        backgroundColor: 'azure',
        border: '1px dashed lightgrey',
        borderRadius: 2,
        '&:hover': {
          backgroundColor: 'lightcyan',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
};
