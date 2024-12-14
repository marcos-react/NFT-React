import React from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { NewItemsProvider } from "./Context/NewItemsContext";

const App = () => {
  return (
    <NewItemsProvider>
      <WelcomePage />
    </NewItemsProvider>
  );
};

export default App;

