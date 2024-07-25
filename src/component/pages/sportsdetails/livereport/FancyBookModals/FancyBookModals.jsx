/* eslint-disable no-unused-vars */
import "./FancyBookModals.scss";
import { Empty } from "antd";

const FancyBookModals = () => {
  const data = [];

  return (
    <>
      <div>
        <div className="run_amount_heading">
          <h3>Run</h3>
          <h3>Amount</h3>
        </div>

        {data?.length == 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <>
            {data?.map((res, index) => {
              return (
                <div key={index} className="pnl">
                  <p>{res?.odds}</p>
                  <p
                    className={`${
                      res?.pnl >= 0 ? "text_success" : "text_danger"
                    }`}>
                    {res?.pnl}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default FancyBookModals;
