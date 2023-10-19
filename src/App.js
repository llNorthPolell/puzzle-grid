import { PuzzleGridContainer } from './puzzle-grid-container/puzzle-grid-container';
import { PuzzleBlock } from './puzzle-grid-container/puzzle-block/puzzle-block';
import './App.css';


const styles = [
  {
    key: "1x1",
    height:"1",
    width: "1",
    color: "blue"
  },
  {
    key: "2x1",
    height:"1",
    width: "2",
    color: "red"
  },
  {
    key: "2x2",
    height: "2",
    width: "2",
    color: "green"
  },
  {
    key: "4x2",
    height: "2",
    width: "4",
    color: "yellow"
  }
]

const data = [
  {id: "1", style:"2x1"},
  {id: "2", style:"2x2"},
  {id: "3", style:"1x1"},
  {id: "4", style:"1x1"},
  {id: "5", style:"1x1"},
  {id: "6", style:"2x2"},
  {id: "7", style:"1x1"},
  {id: "8", style:"1x1"},
  {id: "9", style:"1x1"},
  {id: "10", style:"4x2"},
]

function App() {
  return (
    <div>
      <h1>Puzzle Grid Example</h1>
      <br/><br/>
      <p> Here is an example of the puzzle grid with blocks with varying sizes. You may drag and drop each block. </p>
      <br/><br/>
      <div className="content">
        <PuzzleGridContainer>
          {
            data.map(block=>{
              const style = styles.find(style=> style.key===block.style);
              return <PuzzleBlock key={block.id} 
                                  id={block.id} 
                                  draggable={true} 
                                  widthSpan={style.width} 
                                  heightSpan={style.height} 
                                  className={`block-${style.color} block-style`}>
                                    {block.id}
                      </PuzzleBlock>
            })
          }
        </PuzzleGridContainer>
      </div>
    </div>
  );
}

export default App;
