import CheckTTN from 'components/CheckTTN/CheckTTN';
import { useEffect } from 'react';
import { getTrackingStatus } from 'redux/operations';

const Home = () => {

  useEffect(() => {
    const fetchTrackingData = async (number) => {
      try {
        const response = await getTrackingStatus(number);
        console.log(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    } 
    fetchTrackingData(`20400344966669`);
  }, [])

  return (
    <>
      <CheckTTN />
    </>
  );
};

export default Home;
