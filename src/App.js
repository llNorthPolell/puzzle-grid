import { PuzzleGridContainer } from './puzzle-grid-container/puzzle-grid-container';
import { PuzzleBlock } from './puzzle-grid-container/puzzle-block/puzzle-block';
import './App.css';

function App() {
  return (
    <PuzzleGridContainer>
      <PuzzleBlock id="1" draggable={true} widthSpan="2" heightSpan="1">1</PuzzleBlock>
      <PuzzleBlock id="2" draggable={true} widthSpan="2" heightSpan="2">2</PuzzleBlock>
      <PuzzleBlock id="3" draggable={true} widthSpan="1" heightSpan="1">3</PuzzleBlock>
      <PuzzleBlock id="4" draggable={true} widthSpan="1" heightSpan="1">4</PuzzleBlock>
      <PuzzleBlock id="5" draggable={true} widthSpan="1" heightSpan="1">5</PuzzleBlock>
      <PuzzleBlock id="6" draggable={true} widthSpan="2" heightSpan="2">6</PuzzleBlock>
      <PuzzleBlock id="7" draggable={true} widthSpan="1" heightSpan="1">7</PuzzleBlock>
      <PuzzleBlock id="8" draggable={true} widthSpan="1" heightSpan="1">8</PuzzleBlock>
      <PuzzleBlock id="9" draggable={true} widthSpan="1" heightSpan="1">9</PuzzleBlock>
    </PuzzleGridContainer>
  );
}

export default App;
