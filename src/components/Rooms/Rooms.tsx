import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"

import rooms from "../../data/rooms.json";


const Room = () => {
    const { roomPath } = useParams();
    const room = rooms.find(r => r.roomPath === roomPath);

    // temporärt olöst
    const [isSolved] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const showHint = searchParams.get("hint") === "true";

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
        </div>
    );
};

export default Room;