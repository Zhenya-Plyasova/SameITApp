import { useState, useEffect } from 'react';
import { getTrackingStatus } from 'servises/operations';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TtnStatus } from 'components/TTNStatus';
import HistoryBlock from 'components/History/History';
import SearchBar from 'components/SearchBar/SearchBar';

export default function CheckTTN() {
  const [declarationStatus, setDeclarationStatus] = useState({});
  const [searchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const TtnQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchTrackingData = async TtnQuery => {
        try {
        setIsLoading(true);
        const response = await getTrackingStatus(TtnQuery);
        console.log(response.data.data[0]);
        setDeclarationStatus(response.data.data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    TtnQuery && fetchTrackingData(TtnQuery);
  }, [TtnQuery]);
  return (
    <>
      <Box>
        <SearchBar
          label="Введіть номер ТТН"
          buttonText="Отримати статус"
          pattern="numeric"
        />
      </Box>
      {error && <p>Something went wrong...</p>}
        <TtnStatus data={declarationStatus} isLoading={isLoading} />
      <HistoryBlock />
    </>
  );
}
