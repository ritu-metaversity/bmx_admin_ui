import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import "./ListSuper.scss";
import UserListTable from "../../../common/UserListTable";
import ClientUserListTable from "../../../common/ClientUserListTable";
// import { useSuperuserListQuery } from "../../../../store/service/supermasteAccountStatementServices";

const ListSuper = ({ userTyep, Listname }) => {
  const UserId = localStorage.getItem("userId");
  const [parentUserids, setParentUserIds] = useState(UserId);

  useEffect(() => {
    setParentUserIds(UserId);
  }, [UserId]);

  const { id } = useParams();

  // console.log(!id, "dfsdfsdf")

  //   console.log(UserId, parentUserids, "dss")

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  const handleCreate = () => {
    if (Listname === "Super Master") {
      nav("/client/create-super");
    } else if (Listname === "Master") {
      nav("/client/create-agent");
    } else if (Listname === "Agent") {
      nav("/client/create-dealer");
    } else {
      nav("/client/create-client");
    }
  };
  return (
    <>
      <div className="main_live_section list_supers">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              {Listname} Details
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          {!id && <div className="table_section "></div>}
        </div>
        <div>
          {!id && (
            <div className="create_btn">
              <div onClick={handleCreate}>
                <p>
                  <Link to="">
                    <AiOutlinePlus />
                    {""}
                    Create
                  </Link>
                </p>
              </div>
              <div></div>
            </div>
          )}
          <div className="table_section sport_detail m-0">
            <UserListTable
              Listname={Listname}
              userType={userTyep}
              UserId={UserId}
              parentUserids={parentUserids}
              setParentUserIds={setParentUserIds}
            />
          </div>
        </div>
      </div>

      {id && Listname !== "Client" && (
        <div className="main_live_section list_supers">
          <div className="_match">
            <div className="sub_live_section live_report">
              <div
                style={{ padding: "5px 8px", fontSize: "22px" }}
                className="team_name">
                Client Details
              </div>
              {/* <div className="show_btn">
                <button onClick={handleBackClick}>Back</button>
              </div> */}
            </div>
          </div>
          <div>
            {!id && (
              <div className="create_btn">
                <div onClick={handleCreate}>
                  <p>
                    <Link to="">
                      <AiOutlinePlus />
                      {""}
                      Create
                    </Link>
                  </p>
                </div>
                <div></div>
              </div>
            )}
            <div className={"table_section sport_detail m-0"}>
              <ClientUserListTable
                Listname={Listname}
                userType={3}
                parentUserids={parentUserids}
                UserId={UserId}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListSuper;
