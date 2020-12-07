import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import HomeContent from "./HomeContent";
import Search from "./Search";

export function Home() {
  <Heading title="Home" />;

  const [items, result] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        result(json.results);
        setFilteredItems(json.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterCards = function (e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = items.filter(function (i) {
      const lowerCaseName = i.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredItems(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <ul>
      <Search handleSearch={filterCards} />
      {filteredItems.map((item) => (
        <Container>
          <Row>
            <Col sm={2} md={4} lg={8} key={item}>
              <HomeContent key={item} item={item} />
            </Col>
          </Row>
        </Container>
      ))}
    </ul>
  );
}

export default Home;
