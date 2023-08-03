import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import "./ListSuper.Scss";
import { useSuperuserListQuery } from "../../../../store/service/superMasteruseListServices";
import UserListTable from "../../../common/userListTable";
import React, { useEffect } from "react";

const ListSuper = ({userTyep, Listname}) => {
 
  const {id} = useParams()

  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/client/details-master");
  };

  const handleCreate = () => {
    if(Listname === "Super Agent"){
      nav("/client/create-super");
    }else if(Listname === "Master"){
      nav("/client/create-agent");
    }else if(Listname === "Dealer"){
      nav("/client/create-dealer");
    }
    else{
      nav("/client/create-client")
    }
  };

  const { data } = useSuperuserListQuery({
    userType: userTyep,
    parentUserId: id || null,
    noOfRecords:"100",
    index:"0"
},{refetchOnMountOrArgChange:true});



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
            <div>
              <p>
                <Link to="/client/limitplusminus-super">Update Limit</Link>
              </p>
            </div>
          </div>
          <div className="table_section sport_detail m-0">
             <UserListTable data ={data} Listname={Listname} userType={userTyep}/>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ListSuper;
