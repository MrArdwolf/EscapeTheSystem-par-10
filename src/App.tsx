import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Room from "./components/Rooms/Rooms";
import { RoomProvider } from "./context/RoomContext";
import Homepage from "./components/Homepage/Homepage";
import WinScreen from "./components/WinScreen/WinScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:roomPath" element={<Room />} />
          <Route path="/victory" element={<WinScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  );
};

export default App;