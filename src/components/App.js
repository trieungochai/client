import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <p>Page 1</p>
      <a href="/pagetwo">Navigate to Page 2</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <p>Page 2</p>
      <a href="/">Navigate to Page 1</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
