import { Col, Row } from "antd";
import React from "react";

const BookMakerData = ({bookmakerData}) => {
  return (
    <>
      <div className="fancy_section">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={21}>
            <div className="">
              <Row>
                <Col span={19} className="back-lay-bg">
                  <div className="fancy_data">
                    <div className="sub_fancy">Bookmaker</div>
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
              {bookmakerData?.map((res, id) => {
                return (
                  <Row key={id} className="scor fancy_all_data">
                    <Col span={19} className="match_title">
                      <div className="title">{res?.nation}</div>
                      <span className="fancy_book_data">Book</span>
                    </Col>
                    <Col span={5}>
                      <Row>
                        <Col span={12}>
                          <div className="lay p-16" style={{ height: "44px" }}>
                            <div>{res?.l1}</div>
                            <div>{res?.ls1}</div>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="back p-16" style={{ height: "44px" }}>
                            <div>{res?.b1}</div>
                            <div>{res?.bs1}</div>
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
    </>
  );
};

export default BookMakerData;
