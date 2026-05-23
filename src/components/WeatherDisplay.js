import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Conditional logic for the styling
  const tempColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      {/* Exactly two p tags, and one span tag to satisfy Cypress tests */}
      <p>
        Temperature: <span style={{ color: tempColor }}>{temperature}</span>
      </p>
      <p>
        Conditions: {conditions}
      </p>
    </div>
  );
};

export default WeatherDisplay;