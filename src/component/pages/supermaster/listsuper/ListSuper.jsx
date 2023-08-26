import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import "./ListSuper.Scss";
import UserListTable from "../../../common/userListTable";

const ListSuper = ({userTyep, Listname}) => {
 

  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/client/details-master");
  };

  const handleCreate = () => {
    if(Listname === "Super Master"){
      nav("/client/create-super");
    }else if(Listname === "Master"){
      nav("/client/create-agent");
    }else if(Listname === "Agent"){
      nav("/client/create-dealer");
    }
    else{
      nav("/client/create-client")
    }
  };


  return (
    <>
      <div className="main_live_section list_supers">
        <div className="_match">
          <div
            className="sub_live_section live_report"
          >
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              {Listname} Details
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="table_section "></div>
        </div>
        <div>
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
          <div className="table_section sport_detail m-0">
             <UserListTable Listname={Listname} userType={userTyep}/>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ListSuper;
