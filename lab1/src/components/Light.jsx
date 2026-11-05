import PropTypes from 'prop-types';
import './Light.css';

function Light({ color = 'red' }) {
  return <div className={`light light--${color}`} />;
}

Light.propTypes = {
  color: PropTypes.oneOf(['red', 'yellow', 'green']).isRequired,
};

export default Light;