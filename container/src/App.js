import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import MarketingApp from "../components/MarketingApp";
import Header from "../components/Header";

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
