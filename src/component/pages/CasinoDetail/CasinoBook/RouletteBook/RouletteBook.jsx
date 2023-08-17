import { useEffect, useState } from "react";
import "./RouletteBook.scss";
import { Card, Col, Empty, Row } from "antd";
import Bets from "./Bets/Bets";
import Roulette from "./Roulette/Roulette";
import { useNavigate } from "react-router-dom";

const RouletteBook = () => {
  const [counter, setCounter] = useState(0);
  const nav = useNavigate()
  const handleBackbtn = () => {
    nav(-1)
  };



  const data = [
    {
      key: 1,
      value: "0.00",
    },
    {
      key: 2,
      value: "0.00",
    },
    {
      key: 3,
      value: "0.00",
    },
    {
      key: 4,
      value: "0.00",
    },
    {
      key: 5,
      value: "0.00",
    },
    {
      key: 6,
      value: "0.00",
    },
    {
      key: 7,
      value: "0.00",
    },
    {
      key: 8,
      value: "0.00",
    },
    {
      key: 9,
      value: "0.00",
    },
    {
      key: 10,
      value: "0.00",
    },
    {
      key: 11,
      value: "0.00",
    },
    {
      key: 12,
      value: "0.00",
    },
    {
      key: 13,
      value: "0.00",
    },
    {
      key: 14,
      value: "0.00",
    },
  ];

  const data1 = []

  return (
    <>
      <Card
        className="sport_detail roulette"
        title="Roulette Book"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="main_roulette_section">
          <div className="match_id_section">
            <Row>
              <Col xs={12} md={12} lg={5} xl={5}>
                <p className="_match_name">Match ID: 672505</p>
              </Col>
              <Col xs={12} md={12} lg={5} xl={5}>
                <p className="_match_name">Counter: 60</p>
              </Col>
              <Col xs={24} md={24} lg={14} xl={14}>
                <div className="number_section">
                  Last 10 numbers:
                  <span>6</span>
                  <span>26</span>
                  <span>26</span>
                  <span>26</span>
                  <span>26</span>
                  <span>26</span>
                  <span>7</span>
                  <span>26</span>
                  <span>26</span>
                  <span>9</span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            {data?.map((res, id) => {
              return (
                <Col key={id} xs={8} md={8} lg={3} xl={3}>
                  <div className="main_number">
                    <p className="upper_number">{res?.key}</p>
                    <p className="sub_number">{res?.value}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Card>
      <Bets/>
      <Roulette/>
    </>
  );
};

export default RouletteBook;
