import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const ModalWrapper = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ closeModal, children }) => {
  const modalAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Overlay onClick={closeModal}>
      <ModalWrapper style={modalAnimation} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
