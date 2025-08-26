import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import Car from './Component/Car'
import CounterButtons from './Component/Count';
import About from './Component/About';

import { Route, Routes,Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
function increase(){
 setCount(prevCount => prevCount + 1);
  
}
function decrease(){
  setCount(prevCount => prevCount - 1);
}
  return (
    <>
      <h1>Royal Harsh Raipur</h1>
       <h2>Count: {count}</h2>
      <button onClick={increase}>Increment{count}</button>
            <button onClick={decrease}>Decrement{count}</button>
<Car brand="Toyota" model="BS6"/>
<CounterButtons/>
<About/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Click on the Vite and React logos to learn more</p>
<Link to="/about" style={{marginRight:'10px'}}>About</Link>
<Link to="/about">About</Link>

<Routes>
  <Route path="/about" element={<About />} />
  
</Routes>

    </>
  );
}

export default App;
