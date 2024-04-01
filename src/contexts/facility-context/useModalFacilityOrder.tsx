import React from "react";
import { Modal } from "antd";
import { CreateCake } from "./create-cake.jsx";

interface ModalFacilityOrderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UseModalFacilityOrder({ open, setOpen }: ModalFacilityOrderProps) {
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      closable={false}
      maskClosable={true}
      width={1000}
      footer={null}
    >
      <CreateCake />
    </Modal>
  );
}
