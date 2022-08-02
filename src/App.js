import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CCI <code>Turma de Programação Full Stack</code> Ensino Médio.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alô Mundo
        </a>
      </header>
    </div>
  );
}

export default App;
