import React from "react";
import { CookiesProvider } from "react-cookie";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Paths from "./components/Routes/Paths";

function App() {
  return (
    <CookiesProvider>
      <React.Fragment>
        <Header />
        <Paths />
        <Footer />
      </React.Fragment>
    </CookiesProvider>
  );
}

export default App;
