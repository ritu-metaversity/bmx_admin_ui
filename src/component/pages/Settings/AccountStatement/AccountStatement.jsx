import "./AccountStatement.scss";
import { Card, Tabs, DatePicker, Form, Select, Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import AllStatement from "./AllStatement/AllStatement";
import moment from "moment";
import {  useState } from "react";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;



const AccountStatement = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [clientId, setClientId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { id } = useParams();

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const handleSelect = (value) => {
    setClientId(value);
  };


  const handleChange = (value) => {
 
  };

  const items = [
    {
      key: "13",
      label: `All`,
      children: (
        <AllStatement isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} gameType={1} clientId={clientId} dateData={dateData} />
      ),
    },
    {
      key: "14",
      label: `P&L`,
      children: (
        <AllStatement isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} gameType={2} clientId={clientId} dateData={dateData} />
      ),
    },
  ];


  const pName = window.location.pathname;

  return (
    <>
     {
    
    isModalOpen && <div onClick={()=>setIsModalOpen(false)} className="report_overlay1"></div>
    }
      <div className={pName == "/markets" ? "" : "match_slip"}>
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail "
            title={`Transactions 0`}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="main_acc_section">
              <div className="datepicker">
                <Form
                  autoComplete="off"
                  name="basic"
                  // onFinish={onFinish}
                >
                  <Row>
                    <Col xs={24} lg={8}>
                      <RangePicker
                        defaultValue={[dayjs(timeBefore), dayjs(time)]}
                        style={{ marginBottom: "12px", width: "100%" }}
                        onChange={onChange}
                      />
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item
                        // label="Client"
                        name="username"
                        className="selected_user"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Please Select User",
                          },
                        ]}>
                        <Select
                          placeholder={id ? id : "Select User"}
                          options={ []
                          }
                          showSearch
                          allowClear
                          onSelect={handleSelect}
                          onSearch={handleChange}></Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <div></div>
              </div>
              <div className="tab_section transtion_tab">
                <Tabs destroyInactiveTabPane type="card" items={items} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountStatement;
