import CheckTTN from 'components/CheckTTN/CheckTTN';
// import { useEffect } from 'react';
// import { getWarehouses } from 'servises/operations';

const Home = () => {
  // useEffect(() => {
  //   const fetchTrackingData = async (number) => {
  //     try {
  //       const response = await getTrackingStatus(number);
  //       console.log(response.data.data[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchTrackingData(`20400344966669`);
  // }, [])

  // useEffect(() => {
  //   const fetchWarehousesData = async city => {
  //     try {
  //       const response = await getWarehouses(city);
  //       console.log(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchWarehousesData(`Київ`);
  // }, []);

  return (
    <>
      <CheckTTN />
    </>
  );
};

export default Home;
