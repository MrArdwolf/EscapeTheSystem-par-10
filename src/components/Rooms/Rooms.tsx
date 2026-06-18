import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import rooms from "../../data/rooms.json";
import InventoryProvider from "../../context/InventoryContext";
import useRoomContext from "../../hooks/useRoom.ts";

import Inventory from "../Inventory/Inventory";
import "./Room.scss";

const Room = () => {
    const { roomPath } = useParams();
    const { showHints, markHintShown, showHintNow, restoreHint } = useRoomContext();
    const [lastRoomCompleted, setLastRoomCompleted] = useState(false);

    const navigate = useNavigate();

    const hintWasTrue = showHints[roomPath!] === true;

    useEffect(() => {
        if (hintWasTrue) {
            restoreHint();
        }
    }, [roomPath]);

    const showHint = showHintNow || hintWasTrue;

    const room = rooms.find(r => r.roomPath === roomPath);

    if (!room) {
        return <h1> Rummet finns inte! </h1>;
    }

    const [isSolved, setIsSolved] = useState(false);
    const [inventory, setInventory] = useState<any[]>([]);

    useEffect(() => {
        if (inventory.some(item => item.id === room.itemToAdd)) {
            setIsSolved(true);
        } else {
            setIsSolved(false);
        }
    }, [inventory, roomPath]);


    if (!room) {
        return <h1> The room does not exist! </h1>;
    }

    return (
        <div className="room">
            <main>
                <img
                    src={isSolved || lastRoomCompleted ? room.solvedImage : room.unsolvedImage}
                    alt={room.roomName}
                />
                <section>
                    <p className="instruction">
                        {isSolved || lastRoomCompleted ? room.solvedInstruction : room.unsolvedInstruction}
                    </p>
                    <div className="button-container">
                        {!showHint && (
                            <button className="primary-button" onClick={() => markHintShown(roomPath!)}>
                                HINT
                            </button>
                        )}
                        {showHint && (
                            <p>{room.hint}</p>
                        )}
                        {lastRoomCompleted && (
                            <button className="secondary-button" onClick={() => navigate("/victory")}>
                                ESCAPE
                            </button>
                        )}
                    </div>
                </section>
            </main>
            <InventoryProvider>
                <Inventory room={room} setInventory={setInventory} setLastRoomCompleted={setLastRoomCompleted} />
            </InventoryProvider>
        </div>
    );
};

export default Room;