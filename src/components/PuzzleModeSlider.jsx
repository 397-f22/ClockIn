import './PuzzleModeSlider.css'
const PuzzleModeSlider = ({ changePuzzleMode, puzzleMode }) => {

    return (
        <div className="slider-container">
            <div className="word">Word</div>
            <label className="switch">
                <input type="checkbox" onChange={changePuzzleMode} checked={puzzleMode === "math"}/>
                    <span className="slider round"></span>
            </label>
            <div className="math">Math</div>
        </div>
    );
}

export default PuzzleModeSlider;