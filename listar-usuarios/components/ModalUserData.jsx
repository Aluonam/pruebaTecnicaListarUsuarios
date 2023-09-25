import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import NextUser from './NextUser';


const ModalUserData = ({persona, consumoAPI}) => {
  const [isModalOpen, setIsModalOpen] = useState();
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
        <NextUser consumoAPI={consumoAPI}></NextUser>

      </Modal>
    </>
  );
};
export default ModalUserData;