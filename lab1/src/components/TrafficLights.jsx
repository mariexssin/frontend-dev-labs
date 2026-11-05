import PropTypes from 'prop-types';
import Light from './Light';
import './TrafficLights.css';

function TrafficLights({ orientation = 'vertical' }) {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default TrafficLights;