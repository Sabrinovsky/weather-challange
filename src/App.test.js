import React from "react";
import { shallow } from "enzyme";
import WeatherDay from "./components/WeatherDay";
const data = [
  {
    day: "Domingo",
    max_temperature: "25",
    min_temperature: "16",
    max_rel_humidity: "15",
    monthDay: "01/02/2013"
  }
];

it("renders without crashing", () => {
  const page = shallow(<WeatherDay key={0} data={data[0]} />);
  console.log(page.find("").length);
});
