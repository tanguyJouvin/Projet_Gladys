import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
