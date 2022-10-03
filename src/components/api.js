// import React from 'react';

const Api = () => {
  // const key = "sandb_rwTLUz7xYeyQS1Es6Nara0m6qLmbN4NU8KgVxYUC";
  // const urlGetHotel =
  //   "https://sandbox.impala.travel/v1/hotels";

  // Fetch data from API

  // const GetHotels = async () => {
  //   const res = await fetch(urlGetHotel, {
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-api-key": key,
  //       // "Accept-Encoding": "*/*",
  //     },
  //   });
  //   const dataHotels = await res.json();
  //   console.log(dataHotels);
  //   return dataHotels;
  // };
  // GetHotels();
  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'sandb_0gXBJfskPhf8BFSW6xJSqj9lneseXwKiJNhxefnq',
    },
  };
  fetch('https://sandbox.impala.travel/v1/hotels', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default Api;
