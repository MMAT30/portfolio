import React, { useEffect, useState } from "react";
import { ethers } from "ethers";




const Donate = () => {

  const contractABI = require("../../artifacts/contracts/BuyMeTacos.sol/BuyMeTacos.json").abi;
  const contractAddress = require("../../BuyMeTacos.json").mainnet.contractAddress;

  // states
  const [currentAccount, setCurrentAccount] = useState("");
  const [memos, setMemos] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0.001)
  



  



  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const onValueChange = (event) => {
    setValue(event.target.value)
  }

  

  

  const isWalletConnected = async () => {
    try {

      const accounts = await window.ethereum.request({method: 'eth_accounts'})
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0])
        console.log("wallet is connected! " + accounts[0]);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }



  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);
    }
  }



  const buyTacos = async () => {
    try {

      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const BuyMeTacos = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );


        const tacosTxn = await BuyMeTacos.buyTaco(
          name ? name : "Anonymous",
          message ? message : ":)",
          {value: ethers.utils.parseEther("0.001")}
        );
        await tacosTxn.wait();
        console.log("mined ", tacosTxn.hash);



        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const getMemos = async () => {
    try {

      if (window.ethereum) {
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const buyMeTacos = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        
        
        console.log("fetching memos from the blockchain..");
        const memos = await buyMeTacos.getMemos();
        console.log("fetched!");
        console.log(memos)
        setMemos(memos);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    let buyMeTacos
    isWalletConnected()

    setTimeout(() => { 
    getMemos()

    
    const onNewMemo = (from, timestamp, name, message) => {
      console.log("Memo received: ", from, timestamp, name, message);
      setMemos((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message,
          name
        }
      ]);
    };

    

    // listening for new memo events
 
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      buyMeTacos = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      buyMeTacos.on("NewMemo", onNewMemo);
    }


    // clean up function - removes listner on newMemo event
    return () => {
      if (buyMeTacos) {
        buyMeTacos.off("NewMemo", onNewMemo);
      }
    } 

    }, 1000 * 15)
  });



  return (
    <div className="container-fluid bg-light text-center">
      <div className="row justify-content-center">
        <div className="col-auto">
          <p className="h1 m-4">Buy Me Tacos 🌮</p>
          { !currentAccount ? <button className="btn btn-secondary mt-4" onClick={connectWallet}>
            Connect Wallet
          </button> : <button className="btn btn-secondary mt-4" onClick={connectWallet}>
            Disconnect Wallet
          </button>}
          <p className="h4 m-5">{currentAccount}</p>

          
            <form className="m-5">
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="enterEmail"
                  placeholder="Enter Your Name"
                  onChange={onNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  placeholder="Leave A Message"
                  onChange={onMessageChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputValue">Value</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputMessage"
                  min={value}
                  placeholder={value}
                  onChange={onValueChange}
                />
              </div>
              
              <button onClick={buyTacos} type="button" className="btn btn-secondary m-2">
                Send ETH For Tacos
              </button>
            </form>
          

          
          {(memos.length === 0) && (
            <div className="card border-0 shadow-lg m-3">
              <p className="h4 m-3">Fetching Memos...</p>
            </div>
          )}

          {(memos.length !== 0) && (memos.map((memo, index) => {
            return (
              <div key={index} className="card border-0 shadow-lg m-5 p-5">
                <p className="h3">Memo: {memo.message}</p>
                <p className="h3">From: {memo.name}</p>
                <p className="h3">TimeStamp: {memo.timestamp.toString()}</p>
              </div>
            )
          }))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
