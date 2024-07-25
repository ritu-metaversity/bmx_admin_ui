
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import "./DownloadReport.scss";

// const DownloadReport = ({dataSource, headerField, reportType, reportName, balanceData, lenadenaHeading}) => {
const DownloadReport = ({
 
  isModalOpen,
  setIsModalOpen
}) => {
 

  const showdownlodData = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="main_download">
      <div className="overlay_report"></div>
      <button onClick={showdownlodData} className="download">
        <span>Download</span>
      </button>
      {isModalOpen && (
        <div className="report_excel">
          <p >
            <span className="excel_icon">
              <AiOutlineFileExcel />
              <span>Excel</span>
            </span>
          </p>
          <p >
            <span className="pdf_icon">
              <AiOutlineFilePdf />
              <span>Pdf</span>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DownloadReport;
