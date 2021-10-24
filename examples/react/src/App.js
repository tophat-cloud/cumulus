import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import { protect } from 'cumulus';

protect({
  key: 'rwS5MzP0Ig_hpfWqyAre8',
});

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>Text form</h3>
        <input
          style={{ height: 80, width: '50vh', borderRadius: 20, fontSize: 24, paddingLeft: 24, }}
          placeholder="input to here a keywords"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div style={{ display: 'inline-block', justifyContent: 'space-between' }}>
          <button
            style={{ fontSize: 20, marginRight: 8 }}
            onClick={() => setKeyword('select * from 1')}
          >
            Test 'sql injection'
          </button>
          <button
            style={{ fontSize: 20 }}
            onClick={() => setKeyword('<xss id=x tabindex=1 onactivate=alert(1)></xss>')}
          >
            Test 'xss'
          </button>
        </div>
        
        <h3>File form</h3>
        <input style={{ height: 80, width: '50vh', borderRadius: 20, fontSize: 24, paddingLeft: 24, }} type="file"/>

        <p>
          Playground for cumulus@tophat
        </p>
        <a
          className="App-link"
          href="https://cumulus.tophat.cloud"
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
