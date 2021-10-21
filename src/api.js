export const getWeatherInfo = ({ city }) => {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=ffc6dc188b084aaf8a8140004210807&q=${city}&aqi=no`
  ).then((res) => res.json());
};
