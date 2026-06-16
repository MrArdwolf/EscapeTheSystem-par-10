import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import rooms from "../../data/rooms.json";
import InventoryProvider from "../../context/InventoryContext";
import useRoomContext from "../../hooks/useRoom.ts";

import Inventory from "../Inventory/Inventory";


const Room = () => {
    const { roomPath } = useParams();
    const { showHints, markHintShown } = useRoomContext();

    const room = rooms.find(r => r.roomPath === roomPath);

    const [isSolved, setIsSolved] = useState(false);

    const showHint = showHints[roomPath!] === true;

    const handleUseItem = (itemId: number) => {
        if (itemId === room?.itemToSolve) {
            setIsSolved(true);
        }
    };

    {/* useEffect(() => {
        if (isSolved && room?.itemToAdd) {
            addItem([...items, room.itemToAdd]);
        }
    }, [isSolved, room, items, addItem]); */}

    if (!room) {
        return <h1> Rummet finns inte! </h1>;
    }

    return (
        <div>
            <section>
                <img
                    src={isSolved ? room.solvedImage : room.unsolvedImage}
                    alt={room.roomName}
                />
            </section>
            <section>
                <p>
                    {isSolved ? room.solvedInstruction : room.unsolvedInstruction}
                </p>
                {!showHint && (
                    <button onClick={() => markHintShown(roomPath!)}>
                        HINT
                    </button>
                )}
                {showHint && (
                    <p>{room.hint}</p>
                )}
            </section>

            <InventoryProvider>
                <Inventory />
            </InventoryProvider>
        </div>
    );
};

export default Room;