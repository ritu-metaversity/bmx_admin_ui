import { Card, Empty, Spin,} from "antd";
import "./ShowBets.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {LeftOutlined} from '@ant-design/icons'
import moment from "moment";
import { useCasinoBetListQuery } from "../../../../store/service/CasinoServices";


const ShowBets = () => {

    const nav = useNavigate()
    const {id} = useParams()

    const {state} = useLocation();

    const {data, isLoading, isError} = useCasinoBetListQuery({
      casinoId: state?.id,
      roundId: id,
      date: state?.state?.rouletteDate
    }, {refetchOnMountOrArgChange: true})

  return (
    <Card
    className="sport_detail show_bet"
    title={`All Bets - ${id}`}
    extra={<button onClick={() => nav(-1)}><LeftOutlined /> Back</button>}>
    <div className="table_section show_bet_table ant-spin-nested-loading" style={{marginBottom:"12px"}}>
        {isLoading && (
          <>
            <Spin
              className="spin_icon betting_icon comp_spin"
              size="large"></Spin>
          </>
        )}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Market</th>
            <th className="text-right">Rate</th>
            <th>Number</th>
            <th>Winner</th>
            <th className="text-right">Stake</th>
            <th className="text-right">Profit</th>
            <th className="text-right">Loss</th>
            <th className="text-right">Net Pnl</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((res) => (
            <tr key={res.key} className={res.isBack? "back":"lay"}>
              <td>{res?.date}</td>
              <td>{res.clientId}</td>
              <td>{res.market}</td>
              <td className="text-right">{res.rate}</td>
              <td>{res.selection}</td>
              <td>{res.result}</td>
              <td className="text-right">{res.stake}</td>
              <td className="text-right">{res.profit}</td>
              <td className="text-right">{res.loss}</td>
              <td className={`text-right ${res.netpnl < 0?"text_danger":"text_success"}`}>{res.netpnl}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      {data?.data?.length == 0 || isError ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <>
            {/* <Divider />
            <div className="pagination_cus">
              <Pagination
                className="pagination_main ledger_pagination"
                onShowSizeChange={(c, s) => setPaginationTotal(s)}
                total={
                  results?.data?.totalPages &&
                  results?.data?.totalPages * paginationTotal
                }
                defaultPageSize={50}
                pageSizeOptions={[50, 100, 150, 200, 250]}
                onChange={(e) => setIndexData(e - 1)}
              />
            </div> */}
          </>
        )}
    </div>
    {/* <Divider />
    <Pagination
      className="pagination_main ledger_pagination"
      defaultCurrent={1}
      total={50}
    /> */}
  </Card>
  )
}

export default ShowBets
