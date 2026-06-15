import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Room from "./components/Rooms/Rooms";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/room/:roomPath" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;