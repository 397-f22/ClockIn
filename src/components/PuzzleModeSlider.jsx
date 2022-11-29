import './PuzzleModeSlider.css'
const PuzzleModeSlider = ({ changePuzzleMode, puzzleMode }) => {

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={changePuzzleMode}/>
                    <span className="slider round"></span>
            </label>
        </div>
    );
}

export default PuzzleModeSlider;