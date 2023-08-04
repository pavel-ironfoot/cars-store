
import { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [language,setLanguage] = useState<string>('ua')
  return (
    <div className="App">
      <Header setLanguage={setLanguage}/>
      <Main />
    </div>
  );
}

export default App;
