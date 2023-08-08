import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { getWarehouses } from 'servises/operations';
import { OfficeList } from 'components/OfficeList/OfficeList';

const FindOffices
  = () => {

    const [warehouses, setWarehouses] = useState([]);
    const [searchParams] = useSearchParams();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const cityQuery = searchParams.get('query') ?? '';

    useEffect(() => {
      setWarehouses([]);
      setPage(1)
    }, [cityQuery]);
    
    useEffect(() => {
      const fetchWarehousesData = async (city, page) => {
        try {
          if (city.length !== 0) {
            setIsLoading(true);
            let newItems = [];
            const response = await getWarehouses(city, page);
            console.log(response.data.data);
            newItems = response.data.data;
            setWarehouses([...warehouses, ...newItems]);
            if (page === 100) {
              setHasMore(false);
            }
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchWarehousesData(cityQuery, page);
      // eslint-disable-next-line
    }, [cityQuery, page]);

    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setPage(page + 1);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
      // eslint-disable-next-line
    }, [warehouses]);

    return (
      <>
        <div>
          <SearchBar
            label="Оберіть насел. пункт"
            buttonText="знайти"
            pattern="ukrainian"
          />
        </div>
        {error && <p>Something went wrong...</p>}
        <OfficeList warehouses={warehouses} />
        {isLoading && <p> Loading...</p>}
      </>
    );
};

export default FindOffices;
