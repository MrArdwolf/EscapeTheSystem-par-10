import { useNavigate } from "react-router-dom";
import "./WinScreen.scss";

const WinScreen = () => {
    const navigate = useNavigate();

    const handleRestart = () => {
        navigate("/");
        window.location.reload();
    };
    
    return (
        <section>
            <h1>You escaped!</h1>
            <p>Congratulations, you completed Project NEXUS.</p>
            <button className="primary-button" onClick={handleRestart}>Play again</button>
        </section>
    );
};

export default WinScreen;