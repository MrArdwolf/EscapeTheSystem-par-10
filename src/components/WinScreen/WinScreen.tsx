import { useNavigate } from "react-router-dom";

const WinScreen = () => {
    const navigate = useNavigate();

    const resetGame = () => {

    };

    const handleRestart = () => {
        resetGame();
        navigate("/");
    };
    
    return (
        <section>
            <h1>You escaped!</h1>
            <p>Congratulations, you completed Project NEXUS.</p>
            <button onClick={handleRestart}>Play again</button>
        </section>
    );
};

export default WinScreen;