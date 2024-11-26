import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
 // States for "main" counter
 const [mainCount, setMainCount] = useState(0);
 const [isDark, setIsDark] = useState(false);

 // States for "timer" counter
 const [timerCount, setTimerCount] = useState(0);
 const [isRunning, setIsRunning] = useState(false);

 useEffect(() => {
   let timer;
   if (isRunning) {
     timer = setInterval(() => {
       setTimerCount((prevCount) => prevCount + 1); // Increment timer count
     }, 1000);
   }
   // Cleanup function
   return () => clearInterval(timer);
 }, [isRunning]);

 // "main" counter handlers
 const increment = () => setMainCount(mainCount + 1);
 const decrement = () => {
   if (mainCount > 0) setMainCount(mainCount - 1);
 };
 const reset = () => setMainCount(0);

 // Theme toggle handler
 const toggleTheme = () => setIsDark(!isDark);

 // "timer" counter handlers
 const startTimer = () => setIsRunning(true);
 const stopTimer = () => setIsRunning(false);
 const resetTimer = () => {
   setIsRunning(false);
   setTimerCount(0);
 };

  return (
    <div className={`App ${isDark ? "dark-mode" : ""}`}>
         <div className="dark">
         <button onClick={toggleTheme} className="theme-toggle">
  {isDark ? (
    <>
<i class="fa-regular fa-sun"></i>    </>
  ) : (
    <>
      <i className="fas fa-moon"></i>
    </>
  )}
</button>

        </div>
     <div className="main">
        <div className="count">
        <h1>Counter </h1>
        <h2>{mainCount}</h2>
        <div className="counter">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
        </div>
     
     </div>
     <div className="timer">
        <h1>Timer</h1>
        <h2>{timerCount}</h2>
        <div className="button">
          <button onClick={startTimer}>Start Timer</button>
          <button onClick={stopTimer}>Stop Timer</button>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      </div>
    </div>
  );
}

export default App;

