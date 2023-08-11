import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const apiKey = 'bc0aa8469883b07a40cd36b8052a0ae2';

export function getTrackingStatus(number) {
   const data = axios.post('/', {
    apiKey,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: number,
        },
      ],
    },
   });
    return data
}

export function getWarehouses(city, page) {
   const data = axios.post('/', {
     apiKey,
     modelName: 'Address',
     calledMethod: 'getWarehouses',
     methodProperties: {
       CityName: city,
       Page: page,
       Limit: '50',
       Language: 'UA',
     },
   }); 
    return data;
}
