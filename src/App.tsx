import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Room from "./components/Rooms/Rooms";
import InventoryProvider from "./context/InventoryContext";

import Inventory from "./components/Inventory/Inventory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <InventoryProvider>
      <Inventory />
      </InventoryProvider>

      <Routes>
        <Route path="/room/:roomPath" element={<Room />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;