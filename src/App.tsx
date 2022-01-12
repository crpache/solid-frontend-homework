import { useState } from "react";
import { ethers } from "ethers";
import { TOKEN_ADDRESS, ABI } from "./contracts/token";

import DropdownLink from "./components/DropdownLink";
import Modal from "./components/Modal";

declare let window: any;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [accountBalance, setAccountBalance] = useState("");
  const [isInvalidAddress, setIsInvalidAddress] = useState(false);

  let provider: ethers.providers.Provider;
  let contract: ethers.Contract;

  if (window.ethereum && window.ethereum.isMetaMask) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    contract = new ethers.Contract(TOKEN_ADDRESS, ABI, provider);
  }

  const handleConnectToWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log({accounts})
      setIsMetamaskConnected(accounts.length > 0);
    } catch (err) {
      setIsMetamaskConnected(false);
    }
  };

  const handleGetBalance = async (address: string) => {
    try {
      const balanceInWei = await contract.balanceOf(address);
      const balance = ethers.utils.formatEther(balanceInWei);
      setAccountBalance(balance);
      setIsInvalidAddress(false);
    } catch (err) {
      setIsInvalidAddress(true);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAccountBalance("");
    setIsInvalidAddress(false);
  }

  return (
    <>
      <nav className="nav">
        <DropdownLink handleOpenModal={handleOpenModal} />
      </nav>
      {isModalOpen && (
        <Modal
          isMetamaskConnected={isMetamaskConnected}
          isInvalidAddress={isInvalidAddress}
          handleConnectToWallet={handleConnectToWallet}
          handleGetBalance={handleGetBalance}
          handleOnClose={handleCloseModal}
          balance={accountBalance}
        />
      )}
    </>
  );
};

export default App;
