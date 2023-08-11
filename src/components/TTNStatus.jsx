import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CircularIndeterminate from './СircularIndeterminate';

export const TtnStatus = ({data, isLoading}) => {
    const [negativeStatus, setNegativeStatus] = useState(false);
    const [recipientHeader, setRecipientHeader] = useState(false);
    useEffect(() => {
      if ([1, 2, 3, 112].includes(parseInt(data.StatusCode))) {
        setNegativeStatus(true);
      } else {
        setNegativeStatus(false);
      }
          if ([4, 41, 5, 6, 101].includes(parseInt(data.StatusCode))) {
            setRecipientHeader('Прямує до');
          } else if ([7, 8].includes(parseInt(data.StatusCode))) {
            setRecipientHeader('Прибуло');
          } else if (
            [9, 10, 11, 106].includes(parseInt(data.StatusCode))
          ) {
            setRecipientHeader('Отримано');
          } else {
            setRecipientHeader('Адреса доставки');
          }
        }, [data.StatusCode]);

  const InformBlock = (props) => {
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
        maxWidth: 420,
        height: 250,
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
      {isLoading && <CircularIndeterminate />}
      {!data.Status && !isLoading && (
        <InformBlock header={'тут буде інформація про статус доставки'} />
      )}
      {data.Status && !isLoading && (
        <>
          <InformBlock header={'Статус'} value={data.Status} />
          {!negativeStatus && (
            <>
              <InformBlock
                header={'Відправлено'}
                value={data.WarehouseSender}
              />
              <InformBlock
                header={recipientHeader}
                value={data.WarehouseRecipient}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};
