import { Link } from "react-router-dom";

import rooms from "../../data/rooms.json";
import "./Header.scss";

function shuffle(array: any[]) {
    return [...array].sort(() => Math.random() -0.5);
}

const Header = () => {

    const randomRooms = shuffle(rooms);

    return (
        <header>
            <nav>
                    <Link to="/">Start</Link>
                {randomRooms.map(room => (
                    <Link key={room.id} to={`/room/${room.roomPath}`}>
                        {room.roomName}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;