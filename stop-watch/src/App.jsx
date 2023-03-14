import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const id = useRef(null);

  const startCount = () => {
    id && clearInterval(id.current);
    setIsStart(true);
    id.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000)
  }

  const pauseCount = () => {
    clearInterval(id.current);
    setIsStart(false);
  }

  const resetCount = () => {
    pauseCount();
    setCount(0);
  }

  return (
    <div className="App">
      <div style={{
        border: '1px solid gray', width: '400px', padding: '20px', height: '200px', gap: '20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <h1 style={{ margin: '0px', fontSize: '52px' }}>
          {count}
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {
            isStart ? <button style={{ width: '100px', padding: '10px', fontSize: '18px' }}
              onClick={pauseCount}
            >Pause</button> :
              <button style={{ width: '100px', padding: '10px', fontSize: '18px' }}
                onClick={startCount}
              >{count == 0 ? 'Start' : 'Resume'}</button>
          }

          <button style={{ width: '100px', padding: '10px', fontSize: '18px' }}
            onClick={resetCount}
          >Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
