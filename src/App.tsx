import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DenunciarPage from "./pages/Denunciar";
import DenunciaPage from "./pages/Denuncia";
import SobrePage from "./pages/Sobre";
import SplashScreen from "./pages/Splash";
function App() {
  const splashScreen = localStorage.getItem("splash_screen");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          {splashScreen ? <HomePage /> : <SplashScreen />}
        </Route>

        <Route exact path="/denunciar">
          <DenunciarPage />
        </Route>
        <Route exact path="/denuncia/:id">
          <DenunciaPage />
        </Route>
        <Route exact path="/sobre">
          <SobrePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
