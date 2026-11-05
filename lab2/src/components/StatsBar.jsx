import PropTypes from 'prop-types';
import './StatsBar.css';

function StatsBar({ counts, totalClicks, currentSignal, orientation, onToggleOrientation }) {
  const orientationText = orientation === 'vertical' ? 'Вертикальна' : 'Горизонтальна';

  return (
    <aside className="stats-bar">
      <h3 className="stats-bar__title">Панель статистики</h3>

      <ul className="stats-bar__list">
        <li className="stats-bar__item">
          <span>Червоний:</span>
          <strong>{counts.red}</strong>
        </li>
        <li className="stats-bar__item">
          <span>Жовтий:</span>
          <strong>{counts.yellow}</strong>
        </li>
        <li className="stats-bar__item">
          <span>Зелений:</span>
          <strong>{counts.green}</strong>
        </li>
        <li className="stats-bar__item stats-bar__item--total">
          <span>Усього натискань:</span>
          <strong>{totalClicks}</strong>
        </li>
        <li className="stats-bar__item">
          <span>Активний сигнал:</span>
          <strong>{currentSignal}</strong>
        </li>
      </ul>

      <div className="stats-bar__controls">
        <button type="button" className="stats-bar__button" onClick={onToggleOrientation}>
          Змінити орієнтацію ({orientationText})
        </button>
      </div>
    </aside>
  );
}

StatsBar.propTypes = {
  counts: PropTypes.shape({
    red: PropTypes.number.isRequired,
    yellow: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
  }).isRequired,
  totalClicks: PropTypes.number.isRequired,
  currentSignal: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  onToggleOrientation: PropTypes.func.isRequired,
};

export default StatsBar;