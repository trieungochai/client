import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <p>Page 1</p>
      <Link to="/pagetwo">Navigate to Page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <p>Page 2</p>
      <Link to="/">Navigate to Page 1</Link>
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
