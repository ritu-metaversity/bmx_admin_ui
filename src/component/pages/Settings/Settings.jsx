import { Card, Col, Empty,  Modal,  Row } from "antd";
import "./Settings.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChangePassword from "../../common/ChangePassword/ChangePassword";
import moment from "moment";

const data = [];

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="setting_main">
      <div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="setting_data1">
              <Link to="/account-statement">Statements</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="setting_data mob_setting">
              <Link to="/account-operation">A/c operations</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="setting_data">
              <Link to="/profitandloss">Profit & Loss</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="setting_data mob_setting">
              <Link to="/casinoprofitandloss">Casino Profit & Loss</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="setting_data" onClick={()=>setIsModalOpen(true)}>
              <p >Change Password</p>
            </div>
          </Col>
        </Row>

        <Card className="setting_detail ledger_data">
          <div className="table_section">
            <table className="">
              <tr>
                <th>Title</th>
                <th>Sport</th>
                <th>Open Date</th>
                <th>Declared</th>
                <th>Won By</th>
                <th>Profit/Loss</th>
              </tr>
              {
                data?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{moment(res?.date).format("DD-MM-YYYY, h:mm a")}</td>
                      <td>{res?.Collection_Name}</td>
                      <td className="text-right">{res?.Debit}</td>
                      <td className="text-right">{res?.Credit}</td>
                      <td className="text-right">{res?.Balance}</td>
                      <td>{res?.Payment_Type}</td>
                      <td>{res?.Remark}</td>
                    </tr>
                  );
                })}
              {data?.length == 0 && (
                <tr>
                  <td colSpan={6}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  </td>
                </tr>
              )}
            </table>
          </div>
          {/* <Divider /> */}
          {/* <Pagination className="pagination_main ledger_pagination" defaultCurrent={1} total={50} /> */}
        </Card>
      </div>

      <Modal
        className="change_pass"
        title="Change Password"
        open={isModalOpen}
        footer={false} 
        onCancel={handleCancel}         
        >
        <div className="ch_pass">
         <ChangePassword setIsModalOpen={setIsModalOpen}/>
        </div>
      </Modal>
    </Card>
  );
};

export default Settings;
