import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import InventoryProvider from "./context/InventoryContext";

import Inventory from "./components/Inventory/Inventory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <InventoryProvider>
      <Inventory />
      </InventoryProvider>
    </BrowserRouter>
  );
};

export default App;