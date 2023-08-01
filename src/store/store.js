import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./service/authService";
import { dashboardApi } from "./service/dashboardServices";
import { userlistApi } from "./service/userlistService";
import { supermasteAccountStatementApi } from "./service/supermasteAccountStatementServices";
import { loginReportApi } from "./service/loginReportServices";
import { changePasswordApi } from "./service/changePasswordService";
import { superUserListApi } from "./service/superMasteruseListServices";
import { activeMatchesApi } from "./service/ActiveMatcheService";
import { eventDerailApi } from "./service/eventDetailServices";
import { completeFancyApi } from "./service/compeleteFancyServices";
import { fancyBookApi } from "./service/FancyBookServices";
import { ttlBookApi } from "./service/TtlBookServices";
import global  from "./global/slice";
import { profitLossApi } from "./service/ProfitLossServices";
import { sportDetailsApi } from "./service/SportDetailServices";
import { complteFancyOddsClientsApi } from "./service/CompleteFancyOddsServices";
import { oddsPnlApi } from "./service/OddsPnlServices";
import { createUserApi } from "./service/createUserServices";

export const store = configureStore({
  reducer: {
    global,
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userlistApi.reducerPath]: userlistApi.reducer,
    [supermasteAccountStatementApi.reducerPath]:
      supermasteAccountStatementApi.reducer,
    [loginReportApi.reducerPath]: loginReportApi.reducer,
    [changePasswordApi.reducerPath]: changePasswordApi.reducer,
    [superUserListApi.reducerPath]: superUserListApi.reducer,
    [activeMatchesApi.reducerPath]: activeMatchesApi.reducer,
    [eventDerailApi.reducerPath]: eventDerailApi.reducer,
    [completeFancyApi.reducerPath]:completeFancyApi.reducer,
    [fancyBookApi.reducerPath]:fancyBookApi.reducer,
    [ttlBookApi.reducerPath]:ttlBookApi.reducer,
    [profitLossApi.reducerPath]:profitLossApi.reducer,
    [sportDetailsApi.reducerPath]:sportDetailsApi.reducer,
    [complteFancyOddsClientsApi.reducerPath]:complteFancyOddsClientsApi.reducer,
    [oddsPnlApi.reducerPath]:oddsPnlApi.reducer,
    [createUserApi.reducerPath]:createUserApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware()
      .concat(authApi.middleware)
      .concat(dashboardApi.middleware)
      .concat(userlistApi.middleware)
      .concat(supermasteAccountStatementApi.middleware)
      .concat(loginReportApi.middleware)
      .concat(changePasswordApi.middleware)
      .concat(superUserListApi.middleware)
      .concat(activeMatchesApi.middleware)
      .concat(eventDerailApi.middleware)
      .concat(completeFancyApi.middleware)
      .concat(fancyBookApi.middleware)
      .concat(ttlBookApi.middleware)
      .concat(profitLossApi.middleware)
      .concat(sportDetailsApi.middleware)
      .concat(complteFancyOddsClientsApi.middleware)
      .concat(oddsPnlApi.middleware)
      .concat(createUserApi.middleware)
});
