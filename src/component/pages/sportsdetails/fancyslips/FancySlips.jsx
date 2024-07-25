/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from "react";
import { Card, Select, Row, Col,  Form, Button,  Empty } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./FancySlips.scss";


const data =  [
  {
      "date": "2024-03-11 13:32:37",
      "marketname": "Match Odds",
      "dealerid": "Aritu",
      "isactive": false,
      "netpnl": -100.0,
      "pricevalue": 2.36,
      "userid": "C184",
      "pnl": -100.0,
      "stake": 100,
      "matchname": "Karachi Kings v Peshawar Zalmi",
      "placetime": "2024-03-11 01:32:29.846",
      "odds": 2.36,
      "selectionname": "Karachi Kings",
      "isback": true,
      "matchid": 33096074
  },
  {
      "date": "2024-03-11 13:32:53",
      "marketname": "Match Odds",
      "dealerid": "Aritu",
      "isactive": false,
      "netpnl": -73.0,
      "pricevalue": 1.73,
      "userid": "C184",
      "pnl": -73.0,
      "stake": 100,
      "matchname": "Karachi Kings v Peshawar Zalmi",
      "placetime": "2024-03-11 01:32:45.669",
      "odds": 1.73,
      "selectionname": "Peshawar Zalmi",
      "isback": false,
      "matchid": 33096074
  },
  {
      "date": "2024-03-11 13:57:54",
      "marketname": "TOSS",
      "dealerid": "Aritu",
      "isactive": false,
      "netpnl": -100.0,
      "pricevalue": 97.0,
      "userid": "C184",
      "pnl": -100.0,
      "stake": 100,
      "matchname": "Karachi Kings v Peshawar Zalmi",
      "placetime": "2024-03-11 01:57:47.439",
      "odds": 97.0,
      "selectionname": "Karachi Kings",
      "isback": true,
      "matchid": 33096074
  },
  {
      "date": "2024-03-11 15:18:55",
      "marketname": "Match Odds",
      "dealerid": "Aritu",
      "isactive": false,
      "netpnl": -100.0,
      "pricevalue": 2.36,
      "userid": "C184",
      "pnl": -100.0,
      "stake": 100,
      "matchname": "Karachi Kings v Peshawar Zalmi",
      "placetime": "2024-03-11 03:18:45.484",
      "odds": 2.36,
      "selectionname": "Karachi Kings",
      "isback": true,
      "matchid": 33096074
  }
]

const FancySlips = ({ type, name }) => {

  const [clientId, setClientId] = useState("");

  

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  const { id } = useParams();



  const onFinish = (values) => {
   
  };
  const handleSelect = (value) => {
    setClientId(value);
  };
  const handleChange = (value) => {};

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail session_bet"
            title={name}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="form_data">
              <Row className="rejected_row fancy_data_sess mr">
                <Col xs={24} md={24} lg={6} xl={6}>
                  <Form.Item
                    
                    name="username"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please Select User",
                      },
                    ]}>
                    <Select
                      placeholder="Select User"
                      options={[]}
                      showSearch
                      allowClear
                      onSelect={handleSelect}
                      onSearch={handleChange}></Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={5} xl={5}>
                  <Form.Item>
                    <Button
                      type="primary"
                      className="fancy_btn"
                     
                      htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
              <div className="table_section statement_tabs_data active_match_table">
                <table className="">
                  <tr>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Team</th>
                    <th>Selection Name</th>
                    <th>Client</th>
                    <th>Agent</th>
                    <th>Date</th>
                    <th>Profit/Loss</th>
                    <th style={{display:`${type === 2 ? "none":"block"}`}}>Volume</th>
                  </tr>
                  {data?.map((res, id) => {
                    console.log(res, "Dsdasdasd");
                    return (
                      <tr
                        key={id}
                        className={res?.isback === false ? "lay" : "back"}>
                        <td className="text-right">{res?.odds}</td>
                        <td className="text-right">{res?.stake}</td>
                        <td>{res?.marketname}</td>
                        <td>{res?.matchname}</td>
                        <td>{res?.selectionname}</td>
                        <td>{res?.userid}</td>
                        <td>{res?.dealerid}</td>
                        <td>{res?.date}</td>
                        <td
                          className={
                            res?.netpnl < 0
                              ? "text-right text_danger"
                              : "text-right text_success"
                          }>
                          {res?.netpnl}
                        </td>
                        <td style={{display:`${type === 2 ? "none":"block"}`}}>{res?.pricevalue}</td>
                      </tr>
                    );
                  })}
                </table>
                {(data?.length == 0 ) ? (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                ) : (
                  ""
                )}
              </div>
        
          </Card>
        </div>
      </div>
    </>
  );
};

export default FancySlips;
