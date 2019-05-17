import React from "react";

const bars = max_rel_humidity => {
  return (
    <>
      <div
        className={"umi-bar " + (max_rel_humidity / 20 > 0 ? "active" : "")}
      />
      <div className={"umi-bar " + (max_rel_humidity > 20 ? "active" : "")} />
      <div className={"umi-bar " + (max_rel_humidity > 40 ? "active" : "")} />
      <div className={"umi-bar " + (max_rel_humidity >= 80 ? "active" : "")} />
      <div className={"umi-bar " + (max_rel_humidity === 100 ? "active" : "")} />
    </>
  );
};

const WeatherDay = ({ data }) => (
  <div className="weather-day">
    <div className="bg-day pd-default">
      {data.day}
      <div>
        <span className="sub-text">{data.monthDay}</span>
      </div>
    </div>
    <div className="pd-default border-bot high">
      <i className="fa fa-caret-up" />
      {data.max_temperature}º C
    </div>
    <div className="pd-default border-bot low">
      <i className="fa fa-caret-down" />
      {data.min_temperature}º C
    </div>
    <div className="pd-default border-bot">
      {bars(data.max_rel_humidity)}
      {data.max_rel_humidity}%
    </div>
  </div>
);

export default WeatherDay;
