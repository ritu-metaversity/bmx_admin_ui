import { Button, Form, Input, Menu } from "antd";
import "./SearchModals.scss"
import { SearchOutlined } from '@ant-design/icons';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const menu = (
  <Menu  className="menu_item">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item>
          <Input />
        </Form.Item>

        <div className="agent_search_deatil">
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width:"86px",marginRight: "8px"}}>
          <SearchOutlined /> Search
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary " className="ant_reset_btn" style={{width:"86px"}}>
            Reset
          </Button>
        </Form.Item>
        </div>
      </Form>
  </Menu>
);

export default menu;
