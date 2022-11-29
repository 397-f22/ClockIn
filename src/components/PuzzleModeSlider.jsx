import './PuzzleModeSlider.css'
const PuzzleModeSlider = ({ changePuzzleMode, puzzleMode, currentUser }) => {
    const handleChange = () => {
        if (currentUser.uid === "guest") {
            alert("Please login to change puzzle mode!");
            return;
        }
        else {
            changePuzzleMode()
        }
    }

    return (
        <div className="slider-container">
            <div className="word">Word</div>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={currentUser.uid !== "guest" && puzzleMode === "math"} />
                <span className="slider round"></span>
            </label>
            <div className="math">Math</div>
        </div>
    );
}

export default PuzzleModeSlider;