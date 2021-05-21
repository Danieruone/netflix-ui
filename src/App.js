import React, { Fragment } from "react";
// styles
import { GlobalStyles } from "styles/GlobalStyles";
// pages
import { Main } from "./pages/Main";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Main />
    </Fragment>
  );
}

export default App;
