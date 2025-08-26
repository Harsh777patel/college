
import React, { useState, useRef, useEffect } from 'react';

const CounterButtons = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); 
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      <button onClick={handleStart}
        className="bg-green-500 text-white px-4 py-2 m-2 rounded">Start</button>
      <button onClick={handleStop}
        className="bg-red-500 text-white px-4 py-2 m-2 rounded">Stop</button>
    </div>
  );
};

export default CounterButtons;
