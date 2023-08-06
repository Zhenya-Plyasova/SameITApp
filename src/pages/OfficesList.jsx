// import Typography from '@mui/material/T ypography';
import SearchBar from 'components/SearchBar/SearchBar';

const OfficeList = () => {
  return (
    <>
      <div>
        {/* <Typography variant="h6" gutterBottom>
          Пошук відділення за номером або за населеним пунктом
        </Typography> */}
        <SearchBar label="Оберіть насел. пункт" buttonText="знайти" />
      </div>
    </>
  );
};

export default OfficeList;
