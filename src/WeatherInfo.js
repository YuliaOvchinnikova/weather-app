import React, { useState, useEffect } from 'react';
import { getWeatherInfo } from './api';

export const WeatherInfo = ({ city }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const loaddata = async () => {
      const json = await getWeatherInfo({ city });
      setData(json);
      setIsLoading(false);
    };
    loaddata();
  }, [city]);

  if (isLoading || data === undefined || data.current === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Temperature, c</th>
            <th className="table-head">Feels like, c</th>
            <th className="table-head">Wind speed, m/s</th>
            <th className="table-head">Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-number">
              {JSON.stringify(data.current.temp_c)}
            </td>
            <td className="table-number">
              {JSON.stringify(data.current.feelslike_c)}
            </td>
            <td className="table-number">
              {JSON.stringify(data.current.wind_mph)}
            </td>
            <td className="table-number">
              {JSON.stringify(data.current.humidity)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
