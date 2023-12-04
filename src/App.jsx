import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <AlertClock handleClick={handleButtonClick} />
    </div>
  );
}

export default App;
