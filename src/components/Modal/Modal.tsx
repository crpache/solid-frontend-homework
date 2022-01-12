import { useState } from "react";
import {
  Backdrop,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  ModalButton,
  InputWrapper,
  FormInput,
  FormLabel,
  CurrencySymbol,
  ErrorMessage,
} from "./Modal.style";

const Modal = ({
  isMetamaskConnected = false,
  handleConnectToWallet,
  handleGetBalance,
  handleOnClose,
  balance,
  isInvalidAddress,
}: {
  isMetamaskConnected: boolean;
  handleConnectToWallet: () => void;
  handleGetBalance: (address: string) => void;
  handleOnClose: () => void;
  balance?: string;
  isInvalidAddress: boolean;
}) => {
  const [address, setAddress] = useState("");
  return (
    <Backdrop>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Connect to Wallet</ModalTitle>
          <CloseButton className="material-icons" onClick={handleOnClose}>
            close
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {!isMetamaskConnected && (
            <ModalButton
              onClick={(e) => {
                e.preventDefault();
                handleConnectToWallet();
              }}
            >
              Connect with Metamask
            </ModalButton>
          )}
          {isMetamaskConnected && (
            <>
              <InputWrapper>
                <FormLabel>Wallet address</FormLabel>
                <FormInput
                  type="text"
                  id="wallet-address"
                  name="wallet-address"
                  spellCheck="false"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <FormLabel>Balance</FormLabel>
                <FormInput
                  id="wallet-balance"
                  name="wallet-balance"
                  placeholder="--"
                  value={balance}
                  disabled
                />
                <CurrencySymbol>ETH</CurrencySymbol>
              </InputWrapper>
              <ModalButton
                onClick={(e) => {
                  e.preventDefault();
                  handleGetBalance(address);
                }}
                disabled={!address}
              >
                Get balance
              </ModalButton>
              {isInvalidAddress && <ErrorMessage>Invalid address</ErrorMessage>}
            </>
          )}
        </ModalContent>
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
