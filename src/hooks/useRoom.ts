import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

export default function useRoomContext() {
    const context = useContext(RoomContext);

    if (!context) {
        throw new Error("useRoomContext must be used inside RoomProvider");
    }

    return context;
}