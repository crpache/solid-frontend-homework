import styled from "styled-components";

export const Backdrop = styled.section`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  height: 100vh;
  width: 100%;
  padding: 0px 4rem;
  background-color: rgba(51, 51, 51, 0.24);
`;

export const ModalWrapper = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  min-height: 212px;
  width: 600px;
  box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.24);
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const CloseButton = styled.i`
  cursor: pointer;
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 32px;
`;

export const ModalButton = styled.button`
  background: #37a447;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  border: 1px solid #b1b1b4;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  width: 150px;
`;

export const CurrencySymbol = styled.span`
  position: relative;
  width: 0;
  left: -40px;
  color: #646468;
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #af0419;
`