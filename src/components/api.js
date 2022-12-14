// import React from 'react';

const Api = () => {
  const key = 'sandb_MgfCGdF7vkFG17Tb7eD4qr7SraWlIYsdaLE3b3Wu';
  const urlGetHotel = 'https://sandbox.impala.travel/v1/hotels';

  // Fetch data from API

  const GetHotels = async () => {
    const res = await fetch(urlGetHotel, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'Accept-Encoding': '*/*',
      },
    });
    const data = await res.json();
    return data;
  };
  GetHotels();
};

export default Api;
