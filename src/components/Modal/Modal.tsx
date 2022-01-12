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

type props = {
  isMetamaskNotInstalled: boolean;
  isMetamaskConnected: boolean;
  handleConnectToWallet: () => void;
  handleGetBalance: (address: string) => void;
  handleOnClose: () => void;
  balance?: string;
  isInvalidAddress: boolean;
};

const Modal = ({
  isMetamaskNotInstalled = false,
  isMetamaskConnected = false,
  handleConnectToWallet,
  handleGetBalance,
  handleOnClose,
  balance,
  isInvalidAddress,
}: props) => {
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
          {!isMetamaskConnected && !isMetamaskNotInstalled && (
            <ModalButton onClick={handleConnectToWallet}>
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
                onClick={() => handleGetBalance(address)}
                disabled={!address}
              >
                Get balance
              </ModalButton>
              {isInvalidAddress && <ErrorMessage>Invalid address</ErrorMessage>}
            </>
          )}
          {isMetamaskNotInstalled && (
            <>
              <p>Please install MetaMask on your browser</p>
              <ModalButton
                onClick={() => {
                  window.open("https://metamask.io/", "_blank");
                  handleOnClose();
                }}
              >
                Install
              </ModalButton>
            </>
          )}
        </ModalContent>
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
