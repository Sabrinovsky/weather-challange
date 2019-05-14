import React from "react";
import "../index.css";

const Bars = umi => {
  const barNumbers = Math.floor(umi / 20);
  return (
    <>
      <div className={"umi-bar " + (umi / 20 > 0 ? "active" : "")} />
      <div className={"umi-bar " + (barNumbers >= 1 ? "active" : "")} />
      <div className={"umi-bar " + (barNumbers >= 3 ? "active" : "")} />
      <div className={"umi-bar " + (barNumbers >= 4 ? "active" : "")} />
      <div className={"umi-bar " + (barNumbers >= 5 ? "active" : "")} />
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
      {Bars(data.umi)}
      {data.max_rel_humidity}%
    </div>
  </div>
);

export default WeatherDay;
