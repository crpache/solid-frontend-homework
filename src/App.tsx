import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ADDRESS, ABI } from "./contracts/token";

import DropdownLink from "./components/DropdownLink";
import Modal from "./components/Modal";

declare let window: any;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMetamaskNotInstalled, setIsMetamaskNotInstalled] = useState(false);
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [accountBalance, setAccountBalance] = useState("");
  const [isInvalidAddress, setIsInvalidAddress] = useState(false);
  const [network, setNetwork] = useState("");
  const [contract, setContract] = useState<ethers.Contract>();

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.on("chainChanged", (chainId: string) => {
        setNetwork(chainId); // set network value every time network changes
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setContract(new ethers.Contract(ADDRESS, ABI, provider));
      setIsMetamaskNotInstalled(false);
    } else {
      setIsMetamaskNotInstalled(true);
    }
  }, [network]); // create new provider when newtwork changes

  const handleConnectToWallet = async () => {
    try {
      await window.ethereum.request({
        method: "eth_requestAccounts", // request connection
      });
      await window.ethereum.request({
        method: "wallet_switchEthereumChain", // request use Rinkeby network
        params: [{ chainId: "0x4" }],
      });
      setIsMetamaskConnected(true);
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain", // request add Rinkeby network if is not added
            params: [{ chainId: "0x4" }],
          });
          setIsMetamaskConnected(true);
        } catch (addError) {
          setIsMetamaskConnected(false);
        }
      }
    }
  };

  const handleGetBalance = async (address: string) => {
    try {
      const balanceInWei = await contract?.balanceOf(address);
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
  };

  return (
    <>
      <nav className="nav">
        <DropdownLink handleOpenModal={handleOpenModal} />
      </nav>
      {isModalOpen && (
        <Modal
          isMetamaskNotInstalled={isMetamaskNotInstalled}
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
