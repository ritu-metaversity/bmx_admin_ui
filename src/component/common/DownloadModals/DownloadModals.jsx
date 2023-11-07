import { Modal } from "antd";
import React from "react";

const DownloadModals = ({isModalOpen, handleOk, handleCancel}) => {
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default DownloadModals;
