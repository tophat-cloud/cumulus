import './App.css';
import logo from './logo.svg';
import { protect } from 'cumulus';

protect({
  key: 'KMsB9W4hZCejJ6D1fiESP',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input style={{ height: 80, width: '50vh', borderRadius: 20, fontSize: 24, paddingLeft: 24, }} placeholder="검색어를 입력하세요"/>
        <p>
          Playground for cumulus@tophat
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Cumulus
        </a>
      </header>
    </div>
  );
}

export default App;
