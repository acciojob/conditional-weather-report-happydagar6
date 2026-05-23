import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  // Initialize the weather data state
  const [weather, setWeather] = useState({ 
    temperature: 25, 
    conditions: "Sunny" 
  });

  return (
    <div>
      {/* Pass the weather state down to the child component */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;