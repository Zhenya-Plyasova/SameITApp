import Typography from '@mui/material/Typography';
import SearchOffice from 'components/SearchOffice/SearchOffice';

const OfficeList = () => {
  return (
    <>
      <div>
        <Typography variant="h6" gutterBottom>
          Пошук відділення за номером або за населеним пунктом
        </Typography>
        <SearchOffice />
      </div>
    </>
  );
};

export default OfficeList;
