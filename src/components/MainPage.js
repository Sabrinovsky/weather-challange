import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import WeatherDay from "./WeatherDay";
import Chart from "./Chart";
import getData from "../utils/WeatherData";
import Loader from "../Loader";
import Error from "./Error";

const MainPage = () => {

  const [data, setData] = useState(new Array());
  const [loading, setLoading] = useState(true);
  const [cordinate, setCordinate] = useState({
    longitude: null,
    latitude: null
  });
  const [error, setError] = useState(null);

  function handlePositionSuccess(position) {
    setCordinate({
      longitude: position.coords.latitude,
      latitude: position.coords.longitude
    });
  }

  function handleError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError({
          message: "Para visualizar, habilite localização no navegador"
        });
        break;
      default:
        setError({ message: "Não foi possível obter a localização" });
        break;
    }
  }
  
  if (!cordinate.longitude) {
      navigator.geolocation.getCurrentPosition(
      handlePositionSuccess,
      handleError
    );
  }
  
  useEffect(() => {
    console.log(!cordinate.longitude)
    if (cordinate.longitude || cordinate.longitude) {
      getData.then(res => {
        setLoading(false);
        setData(res);
      });
    }
  }, [cordinate]);

  if (error) return <Error message={error.message} />;
  if (loading) return <Loader />;
  return (
    <>
      <Container>
        <Row>
          <Col className="responsive-flex">
            {data.map((data, key) => {
              return <WeatherDay key={key} data={data} />;
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
