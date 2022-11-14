import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Paths from "./components/Routes/Paths"

function App() {
  return (
    <React.Fragment>
      <Header/>
        <Paths/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
