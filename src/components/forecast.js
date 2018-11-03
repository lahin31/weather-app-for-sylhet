import React from "react";

const Forecast = props => {
  return (
    <div className="forecast">
      <h2>{props.eachList.main.temp}</h2>
      <p>{props.eachList.dt_txt}</p>
    </div>
  );
};

export default Forecast;
