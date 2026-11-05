import PropTypes from 'prop-types';
import './Light.css';

function Light({ color = 'red', isActive = false, onSelect }) {
  return (
    <button
      type="button"
      className={`light light--${color} ${isActive ? 'light--active' : ''}`}
      onClick={() => onSelect(color)}
      aria-label={`Сигнал ${color}`}
    />
  );
}

Light.propTypes = {
  color: PropTypes.oneOf(['red', 'yellow', 'green']).isRequired,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Light;