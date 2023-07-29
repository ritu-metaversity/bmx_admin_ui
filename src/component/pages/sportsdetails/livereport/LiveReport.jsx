import "./LiveReport.scss";
import { Col, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import MoreEvent from "./MoreEvent/MoreEvent";
import CompeleteFancy from "./compeleteFancy/CompeleteFancy";
import { useEventDetailQuery } from "../../../../store/service/eventDetailServices";
import ScoreCard from "./ScoreCard/ScoreCard";
import React, {useEffect, useState } from "react";
import FancyData from "./FancyData/FancyData";
import {
  useFancyPnlQuery,
  useOdsPnlQuery,
} from "../../../../store/service/userlistService";
import { useCompleteFancyQuery } from "../../../../store/service/compeleteFancyServices";
import { useTtlBookQuery } from "../../../../store/service/TtlBookServices";

const LiveReport = () => {
  const [oddsData, setOddsData] = useState([]);
  const [completeFancy, setCompleteFancy] = useState([]);
  const [matchData, setMatchData] = useState('');

  const { id } = useParams();

  const { data, isLoading } = useEventDetailQuery(id, 
  //   {
  //   pollingInterval: 1000,
  // }
  );

  const { data: oddPnl } = useOdsPnlQuery({
    matchId: id,
  });

  const { data: fancyPnl } = useFancyPnlQuery({
    matchId: id,
  });

  const { data: completeFancyData } = useCompleteFancyQuery({
    matchid: Number(id),
  });

  useEffect(() => {
    setOddsData(data?.Odds[0]);
    data?.Odds?.map((res) => {
      console.log(res, "dddsdasds");
    });
    setCompleteFancy(completeFancyData?.data);
  }, [data, completeFancyData]);

  const { data: ttlBook } = useTtlBookQuery({
    matchid: Number(id),
  }, 
  // {pollingInterval: 1000}
  );


  return (
    <>
      {isLoading ? (
        <Spin className="loading_main" tip="Loading..." size="large">
          <div className="content" />
        </Spin>
      ) : (
        <div className="main_live_section1">
          <ScoreCard mid={id} />

          <div>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={20}>
                <div className="match_section">
                  <Row>
                    <Col span={19} className="back-lay-bg">
                      <button>Ttl Book</button>
                      <button>My Book</button>
                    </Col>
                    <Col span={5}>
                      <Row>
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
                {oddsData?.runners?.map((res, id) => {
                  return (
                    <div key={id}>
                      <Row className="scor">
                        <Col span={19} className="tital_sectin">
                          <div className="title">{res?.name}</div>
                          <div className="sub_title">
                            {id === 0
                              ? `${ttlBook?.data[0]?.pnl1}`
                              : id === 1
                              ? `${ttlBook?.data[0]?.pnl2}`
                              : `${ttlBook?.data[0]?.pnl3}`}
                          </div>
                        </Col>
                        <Col span={5}>
                          <Row>
                            {res?.ex?.availableToBack?.map(
                              (backData, index) => {
                                return (
                                  <Col
                                    style={{
                                      display: `${
                                        index === 1 || index === 2 ? "none" : ""
                                      }`,
                                    }}
                                    span={12}
                                    key={index}>
                                    <div
                                      className="lightback p-16"
                                      style={{ height: "47px" }}>
                                      <div>{backData?.price}</div>
                                      {/* <div>0.00</div> */}
                                    </div>
                                  </Col>
                                );
                              }
                            )}
                            {res?.ex?.availableToLay?.map((layData, index) => {
                              return (
                                <Col
                                  style={{
                                    display: `${
                                      index === 1 || index === 2 ? "none" : ""
                                    }`,
                                  }}
                                  span={12}
                                  key={index}>
                                  <div
                                    className="lightlay p-16"
                                    style={{ height: "47px" }}>
                                    <div>{layData?.price}</div>
                                  </div>
                                </Col>
                              );
                            })}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
          {data &&
            Object.keys(data).map(
              (key) =>
                data[key].length !== 0 &&
                key != "Odds" && (
                  <FancyData key={key} data={data[key]} keyData={key} />
                )
            )}
          <CompeleteFancy id={id} completeFancy={completeFancy} />
          <MoreEvent />
        </div>
      )}
    </>
  );
};

export default LiveReport;
