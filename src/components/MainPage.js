import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import WeatherDay from "./WeatherDay";
import Chart from "./Chart";
import getData from "../utils/WeatherData";
import Loader from "../Loader";

const MainPage = () => {
  const [data, setData] = useState(new Array());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData.then(res => {
      setData(res);
      setLoading(false);
    });
  });

  if (loading) return <Loader />;
  if (data.length === 0) return "Nenhum dado encontrado";
  return (
    <>
      <Container className="">
        <Row>
          <Col className="responsive-flex">
            {Object.keys(data).map(key => {
              return <WeatherDay key={key} data={data[key]} />;
            })}
          </Col>
        </Row>
        <Row>
          <Col className="chart">
            <Chart data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
