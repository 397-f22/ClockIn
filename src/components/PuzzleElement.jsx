const PuzzleElement = ({char, currentSolution, setCurrentSolution, index,setIndex, word}) => {
    
    const checkCorrect = () => {
        if(char === word[index]){
        setCurrentSolution([...currentSolution,char])
        setIndex(index+1)
        //Remove button or set it as gray
        }
        else{
            //glow red or something?
        }
    }

    return(
        <div onClick={checkCorrect}>{char}</div>
    )
}

export default PuzzleElement