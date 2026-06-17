import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Room from "./components/Rooms/Rooms";
import { RoomProvider } from "./context/RoomContext";
import Homepage from "./components/Homepage/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:roomPath" element={<Room />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  );
};

export default App;