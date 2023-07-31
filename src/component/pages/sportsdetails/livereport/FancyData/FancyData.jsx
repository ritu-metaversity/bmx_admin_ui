import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import FancyBets from "../fancyBets/FancyBets";
import FancyBookModals from "../FancyBookModals/FancyBookModals";
import { useParams } from "react-router-dom";
import { useOddsQuPnlQuery } from "../../../../../store/service/OddsPnlServices";

const FancyData = ({ data, keyData }) => {
  const [FancyId, setFancyID] = useState("");
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const {data:PnlOdds} = useOddsQuPnlQuery({
    matchId: Number(id)
  })

  const hanldeBookSection = (val) => {
    setOpen(true);
    setFancyID(val);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fancy_section">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={21}>
            <div
              className="fancy_data_main"
              //  style={{marginTop:"12px"}}
            >
              <Row>
                <Col span={19} className="back-lay-bg">
                  <div className="fancy_data">
                    <div className="sub_fancy">{keyData}</div>
                    <div>
                      <span className="fancy_icon">i</span>
                    </div>
                  </div>
                </Col>
                <Col className="b-bottom" span={5}>
                  <Row>
                    <Col span={12} className="lay lagai">
                      <div>No</div>
                    </Col>
                    <Col span={12} className="back khai">
                      <div>Yes</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div>
              {data.map((res, id) => {
                return (
                  <Row key={id} className="scor fancy_all_data">
                    <Col span={19} className="match_title">
                      <div className="title">{res?.nation}</div>
                      {keyData !== "Bookmaker" && (
                        <span
                          className="fancy_book_data"
                          onClick={() => hanldeBookSection(res?.sid)}>
                          Book
                        </span>
                      )}
                      {
                        keyData === "Bookmaker" && 
                          PnlOdds?.data?.map((res, id)=>{
                            if(!res?.marketId?.includes("BM")) return <></>
                            return(
                              <div className="sub_title" key={id}>
                              {res?.pnl1}
                            </div>
                            )
                          })
                        
                      }
                      <div>
                        
                        </div>
                    </Col>
                    <Col
                      data-before-content={res?.gstatus}
                      className={`${res.gstatus === "" ? "" : "after_Effect"}`}
                      span={5}>
                      <Row>
                        <Col span={12}>
                          <div className="lay p-16" style={{ height: "44px" }}>
                            <div>{res?.l1}</div>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="back p-16" style={{ height: "44px" }}>
                            <div>{res?.b1}</div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        open={open}
        title="Run Amount"
        onCancel={handleCancel}
        footer={null}
        className="run_amount_modals">
        <FancyBookModals id={id} FancyId={FancyId} />
      </Modal>
    </>
  );
};

export default FancyData;
