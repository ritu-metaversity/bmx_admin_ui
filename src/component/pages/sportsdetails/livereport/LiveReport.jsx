import "./LiveReport.scss";
import { Col, Modal, Row } from "antd";
import { useParams } from "react-router-dom";
import MoreEvent from "./MoreEvent/MoreEvent";
import CompeleteFancy from "./compeleteFancy/CompeleteFancy";
import ScoreCard from "./ScoreCard/ScoreCard";
import { useState } from "react";
import FancyData from "./FancyData/FancyData";
import BookMakerData from "./BookMakerData/BookMakerData";
import BetModals from "./BetModals/BetModals";

const data = {
  Odds: [
    {
      runners: [
        {
          name: "Manchester Originals",
          selectionId: "26354922",
          runnerStatus: "OPEN",
          ex: {
            availableToBack: [
              {
                price: 1.97,
                size: 12.93,
              },
              {
                price: 1.96,
                size: 1052.37,
              },
              {
                price: 1.95,
                size: 1554.03,
              },
            ],
            availableToLay: [
              {
                price: 1.98,
                size: 173.25,
              },
              {
                price: 1.99,
                size: 20.27,
              },
              {
                price: 2.06,
                size: 87.37,
              },
            ],
          },
        },
        {
          name: "Welsh Fire",
          selectionId: "26354927",
          runnerStatus: "OPEN",
          ex: {
            availableToBack: [
              {
                price: 2.02,
                size: 189.79,
              },
              {
                price: 1.96,
                size: 91.83,
              },
              {
                price: 1.94,
                size: 813,
              },
            ],
            availableToLay: [
              {
                price: 2.04,
                size: 12.49,
              },
              {
                price: 2.06,
                size: 2472.33,
              },
              {
                price: 2.08,
                size: 2178.83,
              },
            ],
          },
        },
      ],
      matchName: "Manchester Originals v Welsh Fire",
      marketId: "1.230780984",
      isMarketDataDelayed: false,
      status: "SUSPENDED",
      inplay: false,
      Name: "Match Odds",
      eventTime: "2024-07-25 23:00:00",
      lastMatchTime: "2024-07-25 12:05:11",
      maxBetRate: 100,
      minBetRate: 0,
      betDelay: 5,
      maxBet: 1,
      minBet: 100,
      betlock: false,
      display_message: "null",
    },
  ],
  Bookmaker: [
    {
      mid: "1.230780984_B-BM",
      t: "Bookmaker 0%Comm",
      sid: "2",
      nation: "Welsh Fire",
      b1: 95,
      bs1: 50000,
      l1: 0,
      ls1: 0,
      gstatus: "",
      matchName: "Manchester Originals v Welsh Fire",
      maxBetRate: 100,
      minBetRate: 0,
      betDelay: 0,
      maxBet: 10000,
      minBet: 100,
      betlock: false,
      display_message: "null",
    },
    {
      mid: "1.230780984_B-BM",
      t: "Bookmaker 0%Comm",
      sid: "1",
      nation: "Manchester Originals",
      b1: 95,
      bs1: 50000,
      l1: 0,
      ls1: 0,
      gstatus: "",
      matchName: "Manchester Originals v Welsh Fire",
      maxBetRate: 100,
      minBetRate: 0,
      betDelay: 0,
      maxBet: 10000,
      minBet: 100,
      betlock: false,
      display_message: "null",
    },
  ],
  Fancy: [],
  Fancy2: [
    {
      mid: "",
      t: "",
      sid: "1.230780984-3-F2",
      nation: "1 to 25 Balls Runs WF(MO vs WF)adv",
      b1: 39,
      bs1: 100,
      l1: 37,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "1",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-1-F2",
      nation: "1 to 25 Balls Runs MO(MO vs WF)adv",
      b1: 39,
      bs1: 100,
      l1: 37,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "1",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-13-F2",
      nation: "Match 1st 5 Balls Runs(MO vs WF)adv",
      b1: 6,
      bs1: 100,
      l1: 5,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "2",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-14-F2",
      nation: "1 to 100 Balls Runs MO(MO vs WF)adv",
      b1: 159,
      bs1: 100,
      l1: 156,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "4",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-19-F2",
      nation: "1 to 100 Balls Runs WF(MO vs WF)adv",
      b1: 159,
      bs1: 100,
      l1: 156,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "4",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-25-F2",
      nation: "Fall of 1st wkt MO(MO vs WF)adv",
      b1: 23,
      bs1: 90,
      l1: 23,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "5",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-26-F2",
      nation: "Fall of 1st wkt WF(MO vs WF)adv",
      b1: 23,
      bs1: 90,
      l1: 23,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "5",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-207-F2",
      nation: "J Buttler run(MO vs WF)adv",
      b1: 24,
      bs1: 90,
      l1: 24,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "6",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-209-F2",
      nation: "P Salt run(MO vs WF)adv",
      b1: 20,
      bs1: 90,
      l1: 20,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "6",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-211-F2",
      nation: "J Bairstow run(MO vs WF)adv",
      b1: 22,
      bs1: 90,
      l1: 22,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "6",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-213-F2",
      nation: "T Kohler Cadmore run(MO vs WF)adv",
      b1: 22,
      bs1: 90,
      l1: 22,
      ls1: 120,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "6",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-41-F2",
      nation: "1st wkt pship Boundaries MO(MO vs WF)adv",
      b1: 4,
      bs1: 100,
      l1: 3,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "7",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-42-F2",
      nation: "1st wkt pship Boundaries WF(MO vs WF)adv",
      b1: 4,
      bs1: 100,
      l1: 3,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "7",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-215-F2",
      nation: "J Buttler Boundaries(MO vs WF)adv",
      b1: 4,
      bs1: 100,
      l1: 3,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "8",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-216-F2",
      nation: "P Salt Boundaries(MO vs WF)adv",
      b1: 4,
      bs1: 100,
      l1: 3,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "8",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-217-F2",
      nation: "J Bairstow Boundaries(MO vs WF)adv",
      b1: 4,
      bs1: 100,
      l1: 3,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "8",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-5-F2",
      nation: "1 to 50 Balls Runs MO(MO vs WF)adv",
      b1: 72,
      bs1: 100,
      l1: 70,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "1",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-7-F2",
      nation: "1 to 50 Balls Runs WF(MO vs WF)adv",
      b1: 72,
      bs1: 100,
      l1: 70,
      ls1: 100,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "1",
    },
    {
      mid: "",
      t: "",
      sid: "1.230780984-76-F2",
      nation: "Top batsman run in Match(MO vs WF)adv",
      b1: 57,
      bs1: 80,
      l1: 57,
      ls1: 110,
      gstatus: "",
      maxBet: 25000,
      minBet: 100,
      betDelay: 0,
      isCommissionAllowed: false,
      srno: "11",
    },
  ],
  Fancy3: [],
  Khado: [],
  Ball: [],
  Meter: [],
  OddEven: [],
  BallByBall: [],
};

const LiveReport = () => {
  const [ShowMyBook, setShowMyBook] = useState(2);
  const [activeBookData, setActiveBookData] = useState(1);
  const [open, setOpen] = useState(false);

  const { id, id1 } = useParams();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleMyBook = () => {
    setShowMyBook(2);
    setActiveBookData(1);
  };

  const handleTtlBook = (mrktid) => {
    setShowMyBook(1);
    setActiveBookData(2);
  };
  const handleBets = (marketid) => {
    setOpen(true);
  };

  return (
    <>
      <div className="main_live_section1">
        <ScoreCard mid={id} />
        <div>
          {data?.Odds?.map((res, id) => {
            return (
              <Row key={id} gutter={[16, 24]}>
                <Col className="gutter-row" span={21}>
                  <div className="match_section">
                    <Row>
                      <Col span={19} className="back-lay-bg">
                        <div className="fancy_data1">
                          <div className="sub_fancy">
                            <p>{res?.Name}</p>
                          </div>
                          <div>
                            <button
                              className={
                                activeBookData == 1 ? "activeMyBook" : ""
                              }
                              onClick={() => handleMyBook()}>
                              My Book
                            </button>
                            <button
                              className={
                                activeBookData == 2 ? "activeMyBook" : ""
                              }
                              onClick={() => handleTtlBook(marketId)}>
                              Ttl Book
                            </button>
                            <button
                              style={{ padding: "0px 12px" }}
                              className={
                                activeBookData == 2 ? "activeMyBook" : ""
                              }
                              onClick={() => handleBets(marketId)}>
                              Bet
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col span={5}>
                        <Row className="yes_no">
                          <Col span={12} className="back lagai">
                            <div>LAGAI</div>
                          </Col>
                          <Col span={12} className="lay khai">
                            <div>KHAI</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  {res?.runners?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Row className="scor">
                          <Col span={19} className="tital_sectin">
                            <div className="title">{item?.name}</div>
                            {ShowMyBook === 1 && (
                              <span className="text_success">0.0</span>
                            )}
                            {res?.Name?.includes("Winner") ? (
                              <div className="sub_title" key={id}>
                                {ShowMyBook === 2 && (
                                  <span className="text_success">0</span>
                                )}
                              </div>
                            ) : (
                              <>
                                <div className="sub_title">
                                  {ShowMyBook === 2 && (
                                    <span className="text_success">0</span>
                                  )}
                                </div>
                              </>
                            )}
                          </Col>
                          <Col span={5}>
                            <Row>
                              {item?.ex?.availableToBack?.map(
                                (backData, index) => {
                                  return (
                                    <Col
                                      style={{
                                        display: `${
                                          index === 1 || index === 2
                                            ? "none"
                                            : ""
                                        }`,
                                      }}
                                      span={12}
                                      key={index}>
                                      <div className="lightback p-16 ht">
                                        <div>{backData?.price}</div>
                                      </div>
                                    </Col>
                                  );
                                }
                              )}
                              {item?.ex?.availableToLay?.map(
                                (layData, index) => {
                                  return (
                                    <Col
                                      style={{
                                        display: `${
                                          index === 1 || index === 2
                                            ? "none"
                                            : ""
                                        }`,
                                      }}
                                      span={12}
                                      key={index}>
                                      <div className="lightlay p-16 ht">
                                        <div>{layData?.price}</div>
                                      </div>
                                    </Col>
                                  );
                                }
                              )}
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            );
          })}
        </div>
        <BookMakerData
          keyData={"Bookmaker"}
          handleBets={handleBets}
          data={data?.Bookmaker}
        />
        {data &&
          Object.keys(data).map(
            (key) =>
              data[key].length !== 0 &&
              key != "Odds" && (
                <FancyData
                  key={key}
                  handleBets={handleBets}
                  data={data[key]}
                  keyData={key}
                />
              )
          )}
        <CompeleteFancy />
        <MoreEvent id1={id1} />
      </div>

      <Modal
        open={open}
        title="Bets"
        width={800}
        onCancel={handleCancel}
        footer={null}
        className="bets_details">
        <BetModals data={[]} />
      </Modal>
    </>
  );
};

export default LiveReport;
