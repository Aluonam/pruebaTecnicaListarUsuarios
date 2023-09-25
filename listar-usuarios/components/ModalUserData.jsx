import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ModalUserData = ({persona}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detalles
      </Button>
      <Modal title={persona.name.first} open={isModalOpen} onOk={handleOk} style={{textAlign:"center"}} onCancel={handleOk}
      footer={[
        <Button  onClick={handleOk}>
            ok
          </Button>
      ]}
      >
        <img src={persona.picture.medium}></img>
        <p>{persona.email}</p>
        <p>{persona.dob.age}</p>
        <p>{persona.login.username}</p>

      </Modal>
    </>
  );
};
export default ModalUserData;