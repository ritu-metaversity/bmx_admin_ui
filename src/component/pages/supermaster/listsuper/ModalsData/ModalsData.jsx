import "./ModalsData.scss";

const ModalsData = ({partnershipDetails}) => {
  return (
    <>
      <div className="partnership">
        <div className="sub_partnership">
          <div className="partnership_name">
            <p>Match Share</p>
          </div>
          <div className="partnership_data">
            <table className="">
              <tr>
                <th>Sub Admin</th>
                <th>Super Master</th>
                <th>Master</th>
                <th>Agent</th>
              </tr>
              <tr>
                <td>{partnershipDetails?.subadminpartnership}</td>
                <td>{partnershipDetails?.supermastepartnership}</td>
                <td>{partnershipDetails?.masterpartership}</td>
                <td>{partnershipDetails?.delearpartership}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="sub_partnership">
          <div className="partnership_name">
            <p>Match Commission</p>
          </div>
          <div className="partnership_data">
            <table className="">
            <tr>
                <th>Sub Admin</th>
                <th>Super Master</th>
                <th>Master</th>
                <th>Agent</th>
                <th>Client</th>
              </tr>
              <tr>
                <td>{partnershipDetails?.subadminoddsloss}</td>
                <td>{partnershipDetails?.supermasteroddsloss}</td>
                <td>{partnershipDetails?.masteroddsloss}</td>
                <td>{partnershipDetails?.agentoddsloss}</td>
                <td>{partnershipDetails?.oddsloss}</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="sub_partnership">
          <div className="partnership_name">
            <p>Session Commission</p>
          </div>
          <div className="partnership_data">
            <table className="">
            <tr>
                <th>Sub Admin</th>
                <th>Super Master</th>
                <th>Master</th>
                <th>Agent</th>
                <th>Client</th>
              </tr>
              <tr>
                <td>{partnershipDetails?.subadminfancyloss}</td>
                <td>{partnershipDetails?.supermasterfancyloss}</td>
                <td>{partnershipDetails?.masterfancyloss}</td>
                <td>{partnershipDetails?.agentfancyloss}</td>
                <td>{partnershipDetails?.fancyloss}</td>
              </tr>
            </table>
          </div>
        </div>
        {/* <div className="sub_partnership">
            <div className="partnership_name">
              <p>Mobile Share</p>
            </div>
            <div className="partnership_data">
              <table className="">
                <tr>
                  <th>Master</th>
                  <th>Super Agent</th>
                  <th>Agent</th>
                </tr>
                <tr>
                  <td>4</td>
                  <td>90</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
        </div> */}
        <div className="sub_partnership">
            <div className="partnership_name">
              <p>Casino Share</p>
            </div>
            <div className="partnership_data">
              <table className="">
              <tr>
                <th>Sub Admin</th>
                <th>Super Master</th>
                <th>Master</th>
                <th>Agent</th>
              </tr>
              <tr>
                <td>{partnershipDetails?.subadminpartnershipc}</td>
                <td>{partnershipDetails?.supermastepartnershipc}</td>
                <td>{partnershipDetails?.masterpartershipc}</td>
                <td>{partnershipDetails?.delearpartershipc}</td>
              </tr>
              </table>
            </div>
        </div>
        <div className="sub_partnership">
            <div className="partnership_name">
              <p>Casino Commission</p>
            </div>
            <div className="partnership_data">
            <table className="">
            <tr>
                <th>Sub Admin</th>
                <th>Super Master</th>
                <th>Master</th>
                <th>Agent</th>
                <th>Client</th>
              </tr>
              <tr>
                <td>{partnershipDetails?.subadmincasinocommssion}</td>
                <td>{partnershipDetails?.supermastercasinocommssion}</td>
                <td>{partnershipDetails?.mastercasinocommssion}</td>
                <td>{partnershipDetails?.agentcasinocommssion}</td>
                <td>{partnershipDetails?.casinocommssion}</td>
              </tr>
            </table>
            </div>
        </div>
      </div>
      <br/>
    </>
  );
};

export default ModalsData;
