import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <p>Page 1</p>;
};

const PageTwo = () => {
  return <p>Page 2</p>;
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
