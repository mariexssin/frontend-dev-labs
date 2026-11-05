import { useState } from 'react';
import Light from './Light';
import StatsBar from './StatsBar';
import './TrafficLights.css';

function TrafficLights() {
  const [currentSignal, setCurrentSignal] = useState('red');
  const [orientation, setOrientation] = useState('vertical');
  const [counts, setCounts] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  const handleSelectSignal = (color) => {
    setCurrentSignal(color);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
  };

  const handleToggleOrientation = () => {
    setOrientation((prev) => (prev === 'vertical' ? 'horizontal' : 'vertical'));
  };

  const totalClicks = counts.red + counts.yellow + counts.green;

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-lights traffic-lights--${orientation}`}>
        <Light
          color="red"
          isActive={currentSignal === 'red'}
          onSelect={handleSelectSignal}
        />
        <Light
          color="yellow"
          isActive={currentSignal === 'yellow'}
          onSelect={handleSelectSignal}
        />
        <Light
          color="green"
          isActive={currentSignal === 'green'}
          onSelect={handleSelectSignal}
        />
      </div>

      <StatsBar
        counts={counts}
        totalClicks={totalClicks}
        currentSignal={currentSignal}
        orientation={orientation}
        onToggleOrientation={handleToggleOrientation}
      />
    </div>
  );
}

export default TrafficLights;