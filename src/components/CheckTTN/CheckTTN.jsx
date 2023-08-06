import Box from '@mui/material/Box';
import { TtnStatus } from 'components/TTNStatus';
import HistoryBlock from 'components/History/History';
import SearchBar from 'components/SearchBar/SearchBar';

export default function CheckTTN() {
  return (
    <>
      <Box>
        <SearchBar
          label="Введіть номер ТТН"
          buttonText="Отримати статус"
          pattern="[0-9]*"
        />
      </Box>
          {/* <div style={{ display: "flex" }}> */}
        <TtnStatus />
        <HistoryBlock />
      {/* </div> */}
    </>
  );
}
