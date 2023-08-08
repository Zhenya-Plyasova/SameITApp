import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const TtnStatus = props => {
    const [negativeStatus, setNegativeStatus] = useState(false);
    const [recipientHeader, setRecipientHeader] = useState(false);
    useEffect(() => {
      if ([1, 2, 3, 112].includes(parseInt(props.data.StatusCode))) {
        setNegativeStatus(true);
      } else {
        setNegativeStatus(false);
      }
          if ([4, 41, 5, 6, 101].includes(parseInt(props.data.StatusCode))) {
            setRecipientHeader('Прямує до');
          } else if ([7, 8].includes(parseInt(props.data.StatusCode))) {
            setRecipientHeader('Прибуло');
          } else if (
            [9, 10, 11, 106].includes(parseInt(props.data.StatusCode))
          ) {
            setRecipientHeader('Отримано');
          } else {
            setRecipientHeader('Адреса доставки');
          }
        }, [props.data.StatusCode]);

  const InformBlock = props => {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
      >
        <Typography variant="body1" color="grey" sx={{ ml: 1 }}>
          <span style={{ color: '#1976d2', fontWeight: 'bold' }}>
            {props.header}:{' '}
          </span>
          {props.value}
        </Typography>
      </div>
    );
  };
  return (
    <Box
      sx={{
        m: 1,
        p: 1,
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
    >
      {props.data.Status && (
        <>
          <InformBlock header={'Статус'} value={props.data.Status} />
                  {!negativeStatus&&(<><InformBlock
            header={'Відправлено'}
            value={props.data.WarehouseSender}
          />
          <InformBlock
            header={recipientHeader}
            value={props.data.WarehouseRecipient}
          /></>)}
        </>
      )}
    </Box>
  );
};
