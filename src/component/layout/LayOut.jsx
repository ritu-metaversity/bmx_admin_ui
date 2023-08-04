
import { Layout} from "antd";
import { useEffect, useState } from "react";
import Sidebar from "../common/sidebar/Sidebar";
const { Header,  Content } = Layout;
import Navbar from "../common/navbar/Navbar";
import "./LayOut.scss";
import MarqueeTag from "../common/marquee/MarqueeTag";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import MasterDetails from "../pages/masterDetail/MasterDetails";
import LadgerDetails from "../pages/ladgerdetail/LadgerDetails";
import SportsDetails from "../pages/sportsdetails/SportsDetails";
import LiveReport from "../pages/sportsdetails/livereport/LiveReport";
import PlusMinusReport from "../pages/sportsdetails/plusminusreport/PlusMinusReport";
import MatchSlips from "../pages/sportsdetails/matchslips/MatchSlips";
import FancySlips from "../pages/sportsdetails/fancyslips/FancySlips";
import CompletedFancySlips from "../pages/sportsdetails/completedFancySlips/CompletedFancySlips";
import RejectedBetsByEvent from "../pages/sportsdetails/rejectedBetsByEvent/RejectedBetsByEvent";
import ListSuper from "../pages/supermaster/listsuper/ListSuper";
import Statement from "../pages/supermaster/statement/Statement";
import AccountOperations from "../pages/supermaster/accountOperations/AccountOperations";
import LoginReport from "../pages/LoginReport/LoginReport";
import CreateSuperAgent from "../pages/CreateSuperAgent/CreateSuperAgent";
import SuperAgentLimitDetails from "../pages/supermaster/SuperAgentLimitDetails/SuperAgentLimitDetails";
// import AgentDetailMainPage from "../pages/AgentDetail/AgentDetailMainPage/AgentDetailMainPage";
import AgentLimitDetails from "../pages/AgentDetail/AgentLimitDetails/AgentLimitDetails";
// import SelectUpline from "../pages/AgentDetail/SelectUpline/SelectUpline";
// import ClientMaster from "../pages/ClientMaster/ClientMaster";
// import ClientUpline from "../pages/ClientMaster/CreateUpline/ClientUpline";
import ClientLimitDetails from "../pages/ClientMaster/ClientLimitDetails/ClientLimitDetails";
import Signin from "../common/signin/Signin";
// import UpdateAgent from "../pages/AgentDetail/UpdateAgent/UpdateAgent";
// import UpdateClient from "../pages/ClientMaster/UpdateClient/UpdateClient";
import UpdateSuper from "../pages/supermaster/updateSuper/UpdateSuper";
import MyLedger from "../pages/ladgerdetail/MyLedger/MyLedger";
import SuperAgentLedger from "../pages/ladgerdetail/SuperAgentLedger/SuperAgentLedger";
import AgentLedger from "../pages/ladgerdetail/AgentLedger/AgentLedger";
import ClientLedger from "../pages/ladgerdetail/ClientLedger/ClientLedger";
import MatchLedger from "../pages/ladgerdetail/MatchLedger/MatchLedger";
import CashTransanction from "../pages/CashTransanction/CashTransanction";
import SuperAgentTransactions from "../pages/CashTransanction/SuperAgentTransactions/SuperAgentTransactions";
import AgentTransactions from "../pages/CashTransanction/AgentTransactions/AgentTransactions";
import ClientTransactions from "../pages/CashTransanction/ClientTransactions/ClientTransactions";
import Settings from "../pages/Settings/Settings";
import AccountStatement from "../pages/Settings/AccountStatement/AccountStatement";
import Operations from "../pages/Settings/AccountOperations/Operations";
import ProfitAndLoss from "../pages/Settings/ProfitAndLoss/ProfitAndLoss";
import CasinoProfitAndLoss from "../pages/Settings/CasinoProfitAndLoss/CasinoProfitAndLoss";
import TodayProfitLoss from "../pages/Settings/CasinoProfitAndLoss/TodayProfitLoss/TodayProfitLoss";
import SelectClient from "../pages/Reports/SelectClient/SelectClient";
import SecureCodeReport from "../pages/Reports/SecureCodeReport/SecureCodeReport";
import RouletteDetail from "../pages/RouletteDetail/RouletteDetail";
import RoulettePlusMinus from "../pages/RouletteDetail/RoulettePlusMinus/RoulettePlusMinus";
import RouletteAllGame from "../pages/RouletteDetail/RouletteAllGame/RouletteAllGame";
import ShowBets from "../pages/RouletteDetail/ShowBets/ShowBets";
import DusKaDumDetail from "../pages/DusKaDumDetail/DusKaDumDetail";
import AndarBaharDetail from "../pages/AndarBaharDetail/AndarBaharDetail";
import AndarBaharPlusMinus from "../pages/AndarBaharDetail/AndarBaharPlusMinus/AndarBaharPlusMinus";
import AnderBaharAllGame from "../pages/AndarBaharDetail/AnderBaharAllGame/AnderBaharAllGame";
import AnderBaharShowBets from "../pages/AndarBaharDetail/AnderBaharShowBets/AnderBaharShowBets";
import CasinoDetail from "../pages/CasinoDetail/CasinoDetail";
import RouletteBook from "../pages/CasinoDetail/CasinoBook/RouletteBook/RouletteBook";
import EventProfitLoss from "../pages/sportsdetails/livereport/EventProfitLoss/EventProfitLoss";

const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();


  const collll = (val) => {
    setCollapsed(val);
  };

  const openDrawer = (val) => {
    setOpen(val);
  };

  const pathName = window.location.pathname;

  const nav = useNavigate()


  useEffect(()=>{
    if(localStorage.getItem("token") === null){
      nav('/');
    }
  }, [nav])

  return (
    <>
    <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
      <Layout className={`main_layout ${(pathName === '/' || pathName === '/signin')? "d-none": ""}`}>
        <Sidebar collll={collll} open={open} />
        <Layout>
          <Header style={{ padding: 0, display: "flex", alignItems: "center", height: "72px", zIndex: "2", }}>
            <Navbar openDrawer={openDrawer} />
          </Header>
          <MarqueeTag />
          <Content style={{ margin: "2px 1px", padding: 1, minHeight: 280, }} className="main_section">
            {/* <Main /> */}
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/client/details-master" element={<MasterDetails />} />
              <Route path="/Events/ladger-details" element={<LadgerDetails />} />
              <Route path="/Events/sports-details" element={<SportsDetails />} />
              <Route path="/livereport" element={<LiveReport />} />
              <Route path="/plus-minus-report/:id" element={<PlusMinusReport />} />
              <Route path="/match-slips" element={<MatchSlips />} />
              <Route path="/fancy-slips" element={<FancySlips />} />
              <Route path="/completed-fancy-slips" element={<CompletedFancySlips />} />
              <Route path="/rejectedBetsByEvent/:id" element={<RejectedBetsByEvent />} />

              <Route path="/client/list-super" element={<ListSuper userTyep={0} Listname={"Super Agent"}/>} />
              <Route path="/client/list-agent" element={<ListSuper userTyep={1} Listname={"Master"} /> } />
              <Route path="/client/list-dealer" element={<ListSuper userTyep={2} Listname={"Dealer"}/> } />
              <Route path="/client/list-client" element={<ListSuper userTyep={3} Listname={"Client"}/> } />

              <Route path="/client/list-super/:id" element={<ListSuper userTyep={0} Listname={"Super Agent"}/> } />
              <Route path="/client/list-agent/:id" element={<ListSuper userTyep={1} Listname={"Master"}/> } />
              <Route path="/client/list-dealer/:id" element={<ListSuper userTyep={2} Listname={"Dealer"}/> } />
              <Route path="/client/list-clent/:id" element={<ListSuper userTyep={3} Listname={"Client"}/> } />

              <Route path="/client/update-super/:id" element={<UpdateSuper updateName={"Super Agent"}/>} />
              <Route path="/client/update-agent/:id" element={<UpdateSuper updateName={"Master"}/>} />
              <Route path="/client/update-client/:id" element={<UpdateSuper updateName={"Client"}/>} />
              <Route path="/client/update-dealer/:id" element={<UpdateSuper updateName={"Dealer"}/>} />
              <Route path="/client/account-operations/:id" element={<AccountOperations />} />
              <Route path="/account-operation" element={<AccountOperations />} />
              <Route path="/client/login-report" element={<LoginReport />} />
              <Route path="/client/login-report/:id" element={<LoginReport />} />
              <Route path="/client/create-super" element={<CreateSuperAgent createName={"Super Agent"}/>}/>
              <Route path="/client/create-agent" element={<CreateSuperAgent createName={"Master"}/>}/>
              <Route path="/client/create-dealer" element={<CreateSuperAgent createName={"Dealer"}/>} />
              <Route path="/client/create-client" element={<CreateSuperAgent createName={"Client"}/>} />
              <Route path="/client/limitplusminus-super" element={<SuperAgentLimitDetails />} />
              <Route path="/client/limitplusminus-agent" element={<AgentLimitDetails />} />
             
              <Route path="/client/limitplusminus-client" element={<ClientLimitDetails />}/>
              <Route path="/client/my-ledger" element={<MyLedger />}/>
              <Route path="/client/ledger-super" element={<SuperAgentLedger/>}/>
              <Route path="/client/ledger-agent" element={<AgentLedger/>}/>
              <Route path="/client/ledger-client" element={<ClientLedger/>}/>
              <Route path="/Events/matchledger" element={<MatchLedger/>}/>
              <Route path="/client/cash-transanction" element={<CashTransanction/>}/>
              <Route path="/client/txn-super" element={<SuperAgentTransactions/>}/>
              <Route path="/client/txn-agent" element={<AgentTransactions/>}/>
              <Route path="/client/txn-client" element={<ClientTransactions/>}/>
              <Route path="/markets" element={<Settings/>}/>
              <Route path="/account-statement" element={<AccountStatement/>}/>
              <Route path="/account-statement/:id" element={<AccountStatement/>}/>
              <Route path="/profitandloss" element={<ProfitAndLoss/>}/>
              <Route path="/casinoprofitandloss" element={<CasinoProfitAndLoss/>}/>
              <Route path="/Casino/today-pandl" element={<TodayProfitLoss/>}/>
              <Route path="/client/mobile-app-report" element={<SelectClient/>}/>
              <Route path="/client/secure-code-report" element={<SecureCodeReport/>}/>
              <Route path="/Casino/roulette-details" element={<RouletteDetail/>}/>
              <Route path="/Casino/rouletteKey/plus-minus-type" element={<RoulettePlusMinus/>}/>
              <Route path="/Casino/rouletteKey/all-games" element={<RouletteAllGame/>}/>
              <Route path="/Casino/show-bets/:id" element={<ShowBets/>}/>
              <Route path="/Casino/dus-ka-dum-details" element={<DusKaDumDetail/>}/>
              <Route path="/Casino/andar-bahar-details" element={<AndarBaharDetail/>}/>
              <Route path="/Casino/AndarBahar/plus-minus-type" element={<AndarBaharPlusMinus/>}/>
              <Route path="Casino/AndarBahar/all-games" element={<AnderBaharAllGame/>}/>
              <Route path="/Casino/show-bet/:id" element={<AnderBaharShowBets/>}/>
              <Route path="/Casino/casino-details" element={<CasinoDetail/>}/>
              <Route path="/Casino/roulette-book" element={<RouletteBook/>}/>
              <Route path="/Events/:id/live-report" element={<LiveReport/>}/>
              <Route path="/Events/:id/pl/live-report" element={<EventProfitLoss/>}/>

            </Routes>
          </Content>
        </Layout>
      </Layout>
      
    </>
  );
};

export default LayOut;
