import {
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  Menu,
  Pagination,
  Row,
  Select,
  Space,
  Spin,
  Table,
} from "antd";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import "./LoginReport.scss";
import { useLazyLoginReportQuery } from "../../../store/service/loginReportServices";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLazyUserListQuery } from "../../../store/service/supermasteAccountStatementServices";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const LoginReport = () => {
  // const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  // const time = moment().format("YYYY-MM-DD");

  const userId = localStorage.getItem("userId");
  const {id} = useParams()


  const {pathname} = useLocation()

  console.log(pathname?.includes(id), "ddasdas")

  const [clientId, setClientId] = useState(userId);
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);
  const [ipOrder, setipOrder] = useState(false);



  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };


  useEffect(()=>{
    if(pathname?.includes(id)){
      setClientId(id)
    }
  }, [pathname])

  const [userList, resultData] = useLazyUserListQuery();

  const [loginReport, { data, isLoading, isFetching, isError }] =
    useLazyLoginReportQuery();

  useEffect(() => {
    loginReport({
      index: indexData,
      noOfRecords: paginationTotal,
      parentId: id || userId,
      orderByIp: ipOrder,
    });
  }, [id, data?.data]);

  const columns = [
    {
      title: "User Name",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "IP-Address",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Login Date",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Detail",
      dataIndex: "deviceInfo",
      key: "deviceInfo",
      width: "5%",
    },
  ];

  const handleChange = (value) => {
    userList({
      userType: null,
      userName: value,
    });
    loginReport({
      index: indexData,
      noOfRecords: paginationTotal,
      parentId: id || value || userId,
      orderByIp: ipOrder,
    });
  };

  const handleSelect = (value) => {
    setClientId(value);
  };

  useEffect(() => {
    loginReport({
      index: indexData,
      noOfRecords: paginationTotal,
      parentId: id || clientId || userId,
      orderByIp: ipOrder,
    });
  }, [clientId, data?.data, paginationTotal, indexData, ipOrder]);

  return (
    <>
      <div className="match_slip login_report">
        <Card
          style={{
            margin: "0px",
            width: "100%",
          }}
          className="sport_detail  team_name"
          title="Login Report"
          extra={<button onClick={handleBackClick}>Back</button>}>
          <Form
            className="form_data mt-16 cash_data"
            name="basic"
            // form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            autoComplete="off">
            <Row>
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
                    placeholder={clientId}
                    options={
                      resultData.data?.data.map((i) => ({
                        label: i,
                        value: i,
                      })) || []
                    }
                    showSearch
                    allowClear
                    // value={clientId}
                    onSelect={handleSelect}
                    onSearch={handleChange}></Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          {/* <div className="table_section statement_tabs_data">
              <div className="table_section">
                <Table
                  className="live_table agent_master" 
                  bordered
                  columns={columns}
                  dataSource={data?.data || []}
                  pagination={{defaultPageSize: 50, pageSizeOptions:[50, 100, 150, 200, 250] }}
                  loading={isLoading||isFetching}></Table>
              </div>
          </div> */}

          <div className="table_section statement_tabs_data ant-spin-nested-loading">
            <table className="live_table">
              <tr>
                <th>User Name</th>
                <th>
                  <div className="ip_section">
                    <p>IP-Address</p>
                    <p onClick={()=>setipOrder(!ipOrder)}>
                      {ipOrder?<CaretUpOutlined />:<CaretDownOutlined />}
                    </p>
                  </div>
                </th>
                <th>Login Date</th>
                <th>Detail</th>
              </tr>
              {isLoading || isFetching ? (
                <div className="spin_icon">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )}
              {!isError && data?.data?.list?.map((res, id) => {
                return (
                  <tr key={id}>
                    <td>{res?.userid}</td>
                    <td>{res?.ip}</td>
                    <td>
                      {moment(res?.lastLogin).format("YYYY-MM-DD, h:mm A")}
                    </td>
                    <td>{res?.deviceInfo}</td>
                  </tr>
                );
              })}
            </table>

            {data?.data?.list === undefined || isError ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              <>
                <Divider />
                <div className="pagination_cus">
                  <Pagination
                    className="pagination_main ledger_pagination"
                    onShowSizeChange={(c, s) => setPaginationTotal(s)}
                    total={
                      data?.data?.totalPages &&
                      data?.data?.totalPages * paginationTotal
                    }
                    defaultPageSize={50}
                    pageSizeOptions={[50, 100, 150, 200, 250]}
                    onChange={(e) => setIndexData(e - 1)}
                  />
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginReport;
