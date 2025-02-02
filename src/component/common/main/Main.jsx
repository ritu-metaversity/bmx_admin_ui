import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MasterDetails from "../../pages/masterDetail/MasterDetails";
import LadgerDetails from "../../pages/ladgerdetail/LadgerDetails";
import SportsDetails from "../../pages/sportsdetails/SportsDetails";
import LiveReport from "../../pages/sportsdetails/livereport/LiveReport";
import PlusMinusReport from "../../pages/sportsdetails/plusminusreport/PlusMinusReport";
import PlusMinusDetails from "../../pages/sportsdetails/plusminusreport/plusMinusDetails/PlusMinusDetails";
import MatchSlips from "../../pages/sportsdetails/matchslips/MatchSlips";
import FancySlips from "../../pages/sportsdetails/fancyslips/FancySlips";
import CompletedFancySlips from "../../pages/sportsdetails/completedFancySlips/CompletedFancySlips";
import RejectedBetsByEvent from "../../pages/sportsdetails/rejectedBetsByEvent/RejectedBetsByEvent";
import ListSuper from "../../pages/supermaster/listsuper/ListSuper";
import UpdateSuper from "../../pages/supermaster/updateSuper/UpdateSuper";
import AccountOperations from "../../pages/supermaster/accountOperations/AccountOperations";
import LoginReport from "../../pages/LoginReport/LoginReport";
import CreateSuperAgent from "../../pages/CreateSuperAgent/CreateSuperAgent";
import SuperAgentLimitDetails from "../../pages/supermaster/SuperAgentLimitDetails/SuperAgentLimitDetails";
import AgentLimitDetails from "../../pages/AgentDetail/AgentLimitDetails/AgentLimitDetails";
import ClientLimitDetails from "../../pages/ClientMaster/ClientLimitDetails/ClientLimitDetails";
import MyLedger from "../../pages/ladgerdetail/MyLedger/MyLedger";
import SuperAgentLedger from "../../pages/ladgerdetail/SuperAgentLedger/SuperAgentLedger";
import MatchLedger from "../../pages/ladgerdetail/MatchLedger/MatchLedger";
import CashTransanction from "../../pages/CashTransanction/CashTransanction";
import SuperAgentTransactions from "../../pages/CashTransanction/SuperAgentTransactions/SuperAgentTransactions";
import AgentTransactions from "../../pages/CashTransanction/AgentTransactions/AgentTransactions";
import ClientTransactions from "../../pages/CashTransanction/ClientTransactions/ClientTransactions";
import Settings from "../../pages/Settings/Settings";
import AccountStatement from "../../pages/Settings/AccountStatement/AccountStatement";
import ProfitAndLoss from "../../pages/Settings/ProfitAndLoss/ProfitAndLoss";
import CasinoProfitAndLoss from "../../pages/Settings/CasinoProfitAndLoss/CasinoProfitAndLoss";
import TodayProfitLoss from "../../pages/Settings/CasinoProfitAndLoss/TodayProfitLoss/TodayProfitLoss";
import SelectClient from "../../pages/Reports/SelectClient/SelectClient";
import SecureCodeReport from "../../pages/Reports/SecureCodeReport/SecureCodeReport";
import RouletteDetail from "../../pages/RouletteDetail/RouletteDetail";
import RoulettePlusMinus from "../../pages/RouletteDetail/RoulettePlusMinus/RoulettePlusMinus";
import RouletteAllGame from "../../pages/RouletteDetail/RouletteAllGame/RouletteAllGame";
import ShowBets from "../../pages/RouletteDetail/ShowBets/ShowBets";
import DusKaDumDetail from "../../pages/DusKaDumDetail/DusKaDumDetail";
import AndarBaharDetail from "../../pages/AndarBaharDetail/AndarBaharDetail";
import AndarBaharPlusMinus from "../../pages/AndarBaharDetail/AndarBaharPlusMinus/AndarBaharPlusMinus";
import AnderBaharAllGame from "../../pages/AndarBaharDetail/AnderBaharAllGame/AnderBaharAllGame";
import AnderBaharShowBets from "../../pages/AndarBaharDetail/AnderBaharShowBets/AnderBaharShowBets";
import CasinoDetail from "../../pages/CasinoDetail/CasinoDetail";
import RouletteBook from "../../pages/CasinoDetail/CasinoBook/RouletteBook/RouletteBook";
import EventProfitLoss from "../../pages/sportsdetails/livereport/EventProfitLoss/EventProfitLoss";
import Signin from "../signin/Signin";
import LayOut from "../../layout/LayOut";
import DeletedLenden from "../../pages/CashTransanction/DeletedLenden/DeletedLenden";
import Rulespage from "../../pages/RulesPage/Rulespage";
import MasterReport from "../../pages/dataReport/masterReport/MasterReport";
import CommReport from "../../pages/dataReport/commReport/CommReport";
import { useEffect } from "react";
import SetCommission from "../../pages/setCommission/SetCommission";


const Main = () => {
  let appUrl = (window.location.hostname).split(".");
  appUrl.shift();
  appUrl=appUrl.join(".");
 




  return (
    <>
       <Routes>
          <Route path="/" element={<Signin logo={"logoData"}/>}/>
          <Route path="/signin" element={<Signin logo={"logoData?.data?.logo"}/>}/>
          <Route path="" element={<LayOut logoData={"logoData"} logo={"ogoData"} />}> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/client/details-master" element={<MasterDetails />} />
            <Route path="/Events/ladger-details" element={<LadgerDetails />} />
            <Route path="/Events/sports-details" element={<SportsDetails />} />
            <Route path="/livereport" element={<LiveReport />} />
            <Route path="/plus-minus-report/:id" element={<PlusMinusReport />} />
            <Route path="/Events/:id/plus-minus-report" element={<PlusMinusDetails />} />
            <Route path="/match-slips/:id" element={<FancySlips  type={2} name={"Match Bets"}/> } />
            <Route path="/fancy-slips/:id" element={<FancySlips type={1} name={"Session Bet"}/>} />
            <Route path="/completed-fancy-slips/:id" element={<CompletedFancySlips/>} />
            <Route path="/rejectedBetsByEvent/:id" element={<RejectedBetsByEvent />} />
            <Route path="/client/list-super" element={<ListSuper userTyep={0} Listname={"Super Master"}/>} />
            <Route path="/client/list-agent" element={<ListSuper userTyep={1} Listname={"Master"} /> } />
            <Route path="/client/list-dealer" element={<ListSuper userTyep={2} Listname={"Agent"}/> } />
            <Route path="/client/list-client" element={<ListSuper userTyep={3} Listname={"Client"}/> } />
            <Route path="/client/list-super/:id" element={<ListSuper userTyep={0} Listname={"Super Master"}/> } />
            <Route path="/client/list-agent/:id" element={<ListSuper userTyep={1} Listname={"Master"}/> } />
            <Route path="/client/list-dealer/:id" element={<ListSuper userTyep={2} Listname={"Agent"}/> } />
            <Route path="/client/list-clent/:id" element={<ListSuper userTyep={3} Listname={"Client"}/> } />
            <Route path="/client/update-super/:id" element={<UpdateSuper updateName={"Super Master"}/>} />
            <Route path="/client/update-agent/:id" element={<UpdateSuper updateName={"Master"}/>} />
            <Route path="/client/update-client/:id" element={<UpdateSuper updateName={"Client"}/>} />
            <Route path="/client/update-dealer/:id" element={<UpdateSuper updateName={"Agent"}/>} />
            <Route path="/client/account-operations/:id" element={<AccountOperations />} />
            <Route path="/account-operation" element={<AccountOperations />} />
            <Route path="/client/login-report" element={<LoginReport />} />
            <Route path="/client/login-report/:id" element={<LoginReport />} />
            <Route path="/client/create-super" element={<CreateSuperAgent createName={"Super Master"}/>}/>
            <Route path="/client/create-agent" element={<CreateSuperAgent createName={"Master"}/>}/>
            <Route path="/client/create-dealer" element={<CreateSuperAgent createName={"Agent"}/>} />
            <Route path="/client/create-client" element={<CreateSuperAgent createName={"Client"}/>} />
            <Route path="/client/limitplusminus-super/:id" element={<SuperAgentLimitDetails />} />
            <Route path="/client/limitplusminus-agent" element={<AgentLimitDetails />} />
            
            <Route path="/client/limitplusminus-client" element={<ClientLimitDetails />}/>
            <Route path="/client/my-ledger" element={<MyLedger />}/>
            <Route path="/client/ledger-super" element={<SuperAgentLedger userTyep={0} Listname={"Super Master"}/>}/>
            <Route path="/client/ledger-master" element={<SuperAgentLedger userTyep={1} Listname={"Master"}/>}/>
            <Route path="/client/ledger-agent" element={<SuperAgentLedger userTyep={2} Listname={"Agent"}/>}/>
            <Route path="/client/ledger-client" element={<SuperAgentLedger userTyep={3} Listname={"Client"}/>}/>
            <Route path="/Events/matchledger" element={<MatchLedger/>}/>
            <Route path="/client/cash-transanction" element={<CashTransanction/>}/>
            {/* <Route path="/client/txn-super" element={<SuperAgentTransactions/>}/> */}
            <Route path="/client/txn-super" element={<AgentTransactions  userType={0} Listname={"Super Master"}/>}/>
            <Route path="/client/txn-agent" element={<AgentTransactions  userType={2} Listname={"Agent"}/>}/>
            <Route path="/client/txn-client" element={<AgentTransactions userType={3} Listname={"Client"}/>}/>
            <Route path="/client/txn-master" element={<AgentTransactions userType={1} Listname={"Master"}/>}/>
            {/* <Route path="/client/txn-client" element={<ClientTransactions/>}/> */}
            <Route path="/markets" element={<Settings/>}/>
            <Route path="/account-statement" element={<AccountStatement/>}/>
            <Route path="/account-statement/:id" element={<AccountStatement/>}/>
            <Route path="/profitandloss" element={<ProfitAndLoss/>}/>
            <Route path="/casinoprofitandloss" element={<CasinoProfitAndLoss/>}/>
            <Route path="/Casino/today-pandl" element={<TodayProfitLoss/>}/>
            <Route path="/client/mobile-app-report" element={<SelectClient/>}/>
            <Route path="/client/secure-code-report" element={<SecureCodeReport/>}/>

            <Route path="/casino/aura-details" element={<RouletteDetail isAura={"Aura"} Id={323334}/>}/>
            <Route path="/casino/supernowa" element={<RouletteDetail isAura={"Super Nowa"} Id={323338}/>}/>
            <Route path="/casino/qtech" element={<RouletteDetail isAura={"QTech"} Id={323337}/>}/>


            <Route path="/casino/:id/plus-minus-type" element={<RoulettePlusMinus/>}/>
            <Route path="/casino/:id/all-games" element={<RouletteAllGame/>}/>
            <Route path="/casino/show-bets/:id" element={<ShowBets/>}/>
            <Route path="/Casino/dus-ka-dum-details" element={<DusKaDumDetail/>}/>
            <Route path="/Casino/andar-bahar-details" element={<AndarBaharDetail/>}/>
            <Route path="/Casino/AndarBahar/plus-minus-type" element={<AndarBaharPlusMinus/>}/>
            <Route path="Casino/AndarBahar/all-games" element={<AnderBaharAllGame/>}/>
            <Route path="/Casino/show-bet/:id" element={<AnderBaharShowBets/>}/>
            <Route path="/Casino/casino-details" element={<CasinoDetail/>}/>
            <Route path="/Casino/roulette-book" element={<RouletteBook/>}/>
            <Route path="/Events/:id/:id1/live-report" element={<LiveReport/>}/>
            <Route path="/Events/:id/pl/live-report" element={<EventProfitLoss/>}/>
            <Route path="/client/deletedlenden/:id" element={<DeletedLenden/>}/>
            <Route path="/rules" element={<Rulespage/>}/>

            <Route path="/report/master" element={<MasterReport userType={1} reportName={"Master"}/>}/>
            <Route path="/report/super" element={<MasterReport userType={0} reportName={"Super Master"}/>}/>
            <Route path="/report/agent" element={<MasterReport userType={2} reportName={"Agent"}/>}/>
            <Route path="/report/client" element={<MasterReport userType={3} reportName={"Clients"}/>}/>
            
            <Route path="/client/comm-report-super" element={<CommReport userType={0} reportName={"Super Master"}/>}/>
            <Route path="/client/comm-report-master" element={<CommReport userType={1} reportName={"Master"}/>}/>
            <Route path="/client/comm-report-agent" element={<CommReport userType={2} reportName={"Agent"}/>}/>
            <Route path="/client/comm-report-client" element={<CommReport userType={3} reportName={"Clients"}/>}/>
            <Route path="/set-commission" element={<SetCommission/>}/>

            
          </Route>
        </Routes>
    </>
  );
};

export default Main;
