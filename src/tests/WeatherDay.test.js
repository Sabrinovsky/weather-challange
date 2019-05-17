import React from "react";
import { shallow } from "enzyme";
import WeatherDay from "../features/home/WeatherDay";

var data = [
  {
    day: "Domingo",
    max_temperature: "25",
    min_temperature: "16",
    max_rel_humidity: "15",
    monthDay: "01/02/2013"
  }
];

it("Should render 1 rel_humidity bar only ", () => {
  data.max_rel_humidity = "10";
  const page = shallow(<WeatherDay key={0} data={data[0]} />);
  expect(page.find(".active").length).toBe(1);
});

it("Should render 2 rel_humidity bar ", () => {
  data[0].max_rel_humidity = "45";
  const page = shallow(<WeatherDay key={0} data={data[0]} />);
  expect(page.find(".active").length).toBe(3);
});

it("Should render 4 rel_humidity bar ", () => {
  data[0].max_rel_humidity = "80";
  const page = shallow(<WeatherDay key={0} data={data[0]} />);
  expect(page.find(".active").length).toBe(4);
  console.log(page.debug());
});
