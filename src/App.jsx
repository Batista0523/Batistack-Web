import { useState } from "react";
import "./App.css";

import Services from "./components/Services";
import Porfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <h1>Batistack Development</h1>
      <Services />
      <Porfolio/>
    </>
  );
}

export default App;
