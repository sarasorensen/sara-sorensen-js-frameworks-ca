import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export function GameDetails() {
  <Heading title="Game Details" />;

  const [detail, SetDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const url = BASE_URL + id;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => SetDetail(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <Row>
      <Col md={6} className="detail-image">
        <Image src={detail.background_image} roundedCircle />
      </Col>
      <Col>
        <h1>{detail.name}</h1>
        <p>
          <b>Rating:</b> {detail.rating}
        </p>
        <p>
          <b>released:</b> {detail.released}
        </p>
      </Col>
    </Row>
  );
}

export default GameDetails;
