import { Form, Switch } from 'antd';
import React from 'react'

const CasinoModalsDash = ({data}) => {
  return (
    <>
    <Form autoComplete="off">
        {data?.map((item, id) => {
          return (
            <Form.Item
              key={id}
              className="switch_btn1"
              label={item?.name}
              style={{ marginTop: "12px" }}
              // name="casinoId"
              >
              <Switch
                defaultChecked={item?.active}
                disabled
              />
            </Form.Item>
          );
        })}
        
      </Form>
    </>
  )
}

export default CasinoModalsDash