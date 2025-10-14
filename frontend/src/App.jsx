import React from "react";
import Header from "./components/Header"
import Countdown from "./components/countdown";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header
        title="Contador formatura info 6a"
        backgroundColor="#1e90ff"
        color="#fff"
      />
      <Countdown targetDate="2025-12-15T00:00:00" />
      <Footer
        title="Contador formatura info 6a"
        backgroundColor="#1e90ff"
        color="#fff"
      />
    </div>
  );
}

export default App;
