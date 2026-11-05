import TrafficLights from './components/TrafficLights';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <h1>Статичний світлофор (CP1)</h1>

      <div className="demonstration-grid">
        <section className="demo-card">
          <h2>Вертикальний світлофор</h2>
          <TrafficLights orientation="vertical" />
        </section>

        <section className="demo-card">
          <h2>Горизонтальний світлофор</h2>
          <TrafficLights orientation="horizontal" />
        </section>
      </div>
    </main>
  );
}

export default App;