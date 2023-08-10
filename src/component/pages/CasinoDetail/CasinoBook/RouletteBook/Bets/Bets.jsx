import { Card, Empty } from 'antd';
import moment from 'moment';
import React from 'react'

const data = [
]

const Bets = () => {
  return (
    <Card
        className="sport_detail bets"
        title="Bets - [ 0 ]">
           <div className="table_section">
        <table className="">
          <tr>
            <th width="3%">Amount</th>
            <th>Numbers</th>
            <th>Client</th>
            <th>Date</th>
            <th>Loss</th>
            <th>Profit</th>
          </tr>
          {data?.map((res) => {
            return (
              <tr key={res?.key}>
                <td>{moment(res?.date).format("DD-MM-YYYY, h:mm a")}</td>
                <td>{res?.Collection_Name}</td>
                <td>{res?.Debit}</td>
                <td>{res?.Credit}</td>
                <td>{res?.Balance}</td>
                <td>{res?.Payment_Type}</td>
              </tr>
            );
          })}
        </table>
        {
          data?.length === 0 &&  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
      </div>
        
      </Card>
  )
}

export default Bets
