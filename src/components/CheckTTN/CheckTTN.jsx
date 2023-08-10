import { useState, useEffect } from 'react';
import { getTrackingStatus } from 'servises/operations';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TtnStatus } from 'components/TTNStatus';
import HistoryBlock from 'components/History/History';
import SearchBar from 'components/SearchBar/SearchBar';

export default function CheckTTN() {
  const [declarationStatus, setDeclarationStatus] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [initialValue, setInitialValue] = useState('');
  const [ttnList, setTtnList] = useState(() => {
    return JSON.parse(localStorage.getItem('ttnList')) ?? [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const TtnQuery = searchParams.get('query') ?? '';
  const onButtonClick = ttnItem => {
    setSearchParams({ query: ttnItem });
    setInitialValue(ttnItem);
  };

  useEffect(() => {
    const fetchTrackingData = async TtnQuery => {
      try {
        setIsLoading(true);
        if (!ttnList.includes(TtnQuery)) {
          setTtnList(prevTtnList => [...prevTtnList, TtnQuery]);
        }
        const response = await getTrackingStatus(TtnQuery);
        setDeclarationStatus(response.data.data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    TtnQuery && fetchTrackingData(TtnQuery);
    // eslint-disable-next-line
  }, [TtnQuery]);

  useEffect(() => {
    ttnList.length !== 0 &&
      localStorage.setItem('ttnList', JSON.stringify(ttnList));
  }, [ttnList]);

  const removeTtnList = () => {
    localStorage.removeItem('ttnList');
    setTtnList([]);
  };

  return (
    <>
      <Box>
        <SearchBar
          label="Введіть номер ТТН"
          buttonText="Отримати статус"
          pattern="numeric"
          initialValue={initialValue}
        />
      </Box>
      {error && <p>Something went wrong...</p>}
      <TtnStatus data={declarationStatus} isLoading={isLoading} />
      <HistoryBlock
        ttnList={ttnList}
        onClick={removeTtnList}
        onButtonClick={onButtonClick}
      />
    </>
  );
}
