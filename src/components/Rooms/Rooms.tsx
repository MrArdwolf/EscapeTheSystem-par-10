import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"

import rooms from "../../data/rooms.json";
import useInventory from "../../hooks/useInventory";


const Room = () => {
    const { roomPath } = useParams();
    const room = rooms.find(r => r.roomPath === roomPath);

    {/* const { items, addItem } = useInventory(); */}

    const [isSolved, setIsSolved] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const showHint = searchParams.get("hint") === "true";

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
                    <button onClick={() => setSearchParams({ hint: "true" }) }>
                        HINT
                    </button>
                )}
                {showHint && (
                    <p>{room.hint}</p>
                )}
            </section>
            {/* <Inventory onUseItem={handleUseItem} /> */}
        </div>
    );
};

export default Room;