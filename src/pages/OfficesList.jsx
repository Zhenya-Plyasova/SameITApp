import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import Typography from '@mui/material/T ypography';
import SearchBar from 'components/SearchBar/SearchBar';
import { getWarehouses } from 'servises/operations';

const OfficeList = () => {

    const [warehouses, setWarehouses] = useState(null);
    const [searchParams] = useSearchParams();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const cityQuery = searchParams.get('query') ?? '';

    useEffect(() => {
      const fetchWarehousesData = async city => {
          try {
              if (city.length !== 0) {
                setIsLoading(true);
                const response = await getWarehouses(city);
                console.log(response.data.data);
                setWarehouses(response.data.data);
            }
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchWarehousesData(cityQuery);
    }, [cityQuery]);
  return (
    <>
      <div>
        {/* <Typography variant="h6" gutterBottom>
          Пошук відділення за номером або за населеним пунктом
        </Typography> */}
        <SearchBar
          label="Оберіть насел. пункт"
          buttonText="знайти"
          pattern="ukrainian"
        />
      </div>
      {error && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
          <ul>
              {warehouses && warehouses.map(warehouse => {
                  return <li key={warehouse.Number}>{warehouse.ShortAddress}</li>;
      })}</ul>
    </>
  );
};

export default OfficeList;
