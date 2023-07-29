import { Card, Empty } from 'antd';


const data = []

const Roulette = () => {
  return (
    <Card
        className="sport_detail roulette_casino"
        title="Roulette"
        extra={
            <p style={{color:"#fff", fontSize:"20px"}}>Total: 0</p>
        }
        >
           <div className="table_section">
        <table className="">
          <tr>
            <th width="15%">ID</th>
            <th width="35%">Winner</th>
            <th className='text-right'>Plus Minus</th>
          </tr>
          {data?.map((res) => {
            return (
              <tr key={res?.key}>
                <td>{res?.date}</td>
                <td>{res?.Collection_Name}</td>
                <td>{res?.Debit}</td>
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

export default Roulette
