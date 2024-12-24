import React, { useState } from "react";
import Wrapper from "./Wrapper";
import SplashScreen from "./screens/splash";

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  setTimeout(() => {
    setIsSplashScreen(false);
  }, 2000);

  return isSplashScreen ? <SplashScreen /> : <Wrapper />;
};

export default App;
