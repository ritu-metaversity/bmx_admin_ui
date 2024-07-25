/* eslint-disable no-unused-vars */
import {
  Card,
  Col,
  Divider,
  Form,
  Pagination,
  Row,
  Select,
  Tooltip,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginReport.scss";
import { useEffect, useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { AiFillEye } from "react-icons/ai";
import DownloadReport from "../../common/DownloadReport/DownloadReport";

const list = [
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-04-11 08:34:55 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
  },
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-04-11 04:49:41 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
  },
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-03-29 07:31:12 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
  },
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-03-23 12:04:06 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
  },
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-03-18 05:30:26 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  },
  {
      "ip": "127.0.0.1",
      "lastLogin": "2024-03-05 01:45:33 PM",
      "userid": "CdemoClient",
      "deviceInfo": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  }
]

const resultData= [
  {
      "userName": "demoClient",
      "userId": "CdemoClient"
  },
  {
      "userName": "demoSuperMaster",
      "userId": "SdemoSuperMaster"
  },
  {
      "userId": "StestSubAdmin",
      "userName": "testSubAdmin"
  }
]

const LoginReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

const totalPages =0;
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);
  const [ipOrder, setipOrder] = useState(false);

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  

  const handleChange = (value) => {
  
  };

  const handleSelect = (value) => {
   
  };

  useEffect(() => {
    
  }, []);




  return (
    <>
      {/* {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="report_overlay"></div>
      )} */}
      <div className="match_slip login_report">
        <Card
          style={{
            margin: "0px",
            width: "100%",
          }}
          className="sport_detail  team_name"
          title="Login Report"
          extra={<button onClick={handleBackClick}>Back</button>}>
          <Row style={{ marginTop: "12px" }}>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item
                // label="Client"
                name="client"
                required
                rules={[
                  {
                    required: true,
                    message: "Please select Client",
                  },
                ]}>
                <Select
                  placeholder={id}
                  options={
                    resultData.map((i) => ({
                      label: `${i?.userId}  (${i?.userName})`,
                      value: i?.userId,
                    })) || []
                  }
                  showSearch
                  allowClear
                  // value={clientId}
                  onSelect={handleSelect}
                  onSearch={handleChange}></Select>
              </Form.Item>
            </Col>
            <Col xl={3} lg={3} md={24} xs={24}>
              <div style={{ marginBottom: "12px" }}>
                <DownloadReport
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                
                />
              </div>
            </Col>
          </Row>

          <div className="table_section statement_tabs_data ant-spin-nested-loading">
            <table className="live_table">
              <tr>
                <th>User Name</th>
                <th>
                  <div className="ip_section">
                    <p>IP-Address</p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setipOrder(!ipOrder)}>
                      {ipOrder ? <CaretUpOutlined /> : <CaretDownOutlined />}
                    </p>
                  </div>
                </th>
                <th>Login Date</th>
                <th>Detail</th>
              </tr>
              {/* {isLoading || isFetching ? (
                <div className="spin_icon">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )} */}
              {list?.map((res, id) => {
                  return (
                    <tr key={id}>
                      <td>{res?.userid}</td>
                      <td>{res?.ip}</td>
                      <td>{res?.lastLogin}</td>
                      <td style={{ cursor: "pointer" }} className="divice-info">
                        <Tooltip title={res?.deviceInfo}>
                          <span>
                            <AiFillEye />
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
            </table>

            {/* {data?.data?.list === undefined || isError ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : ( */}
              <>
                <Divider />
                <div className="pagination_cus">
                  <Pagination
                    className="pagination_main ledger_pagination"
                    onShowSizeChange={(c, s) => setPaginationTotal(s)}
                    total={
                     totalPages * paginationTotal
                    }
                    defaultPageSize={50}
                    pageSizeOptions={[50, 100, 150, 200, 250]}
                    onChange={(e) => setIndexData(e - 1)}
                  />
                </div>
              </>
            {/* )} */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginReport;
