import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import rooms from "../../data/rooms.json";
import InventoryProvider from "../../context/InventoryContext";
import useRoomContext from "../../hooks/useRoom.ts";

import Inventory from "../Inventory/Inventory";


const Room = () => {
    const { roomPath } = useParams();
    const { showHints, markHintShown, showHintNow, restoreHint } = useRoomContext();

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
                <Inventory room={room} setInventory={setInventory} />
            </InventoryProvider>
        </div>
    );
};

export default Room;