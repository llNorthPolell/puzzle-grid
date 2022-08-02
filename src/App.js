import { PuzzleGridContainer } from './puzzle-grid-container/puzzle-grid-container';
import { PuzzleBlock } from './puzzle-grid-container/puzzle-block/puzzle-block';
import './App.css';

function App() {
  return (
    <div>
      <h1>Puzzle Grid Example</h1>
      <br/><br/>
      <p> Here is an example of the puzzle grid with blocks with varying sizes. You may drag and drop each block. </p>
      <br/><br/>
      <PuzzleGridContainer>
        <PuzzleBlock id="1" draggable={true} widthSpan="2" heightSpan="1" className="block-red">1</PuzzleBlock>
        <PuzzleBlock id="2" draggable={true} widthSpan="2" heightSpan="2" className="block-green">2</PuzzleBlock>
        <PuzzleBlock id="3" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">3</PuzzleBlock>
        <PuzzleBlock id="4" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">4</PuzzleBlock>
        <PuzzleBlock id="5" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">5</PuzzleBlock>
        <PuzzleBlock id="6" draggable={true} widthSpan="2" heightSpan="2" className="block-green">6</PuzzleBlock>
        <PuzzleBlock id="7" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">7</PuzzleBlock>
        <PuzzleBlock id="8" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">8</PuzzleBlock>
        <PuzzleBlock id="9" draggable={true} widthSpan="1" heightSpan="1" className="block-blue">9</PuzzleBlock>
        <PuzzleBlock id="10" draggable={true} widthSpan="4" heightSpan="2" className="block-yellow">10</PuzzleBlock>
      </PuzzleGridContainer>
    </div>
  );
}

export default App;
