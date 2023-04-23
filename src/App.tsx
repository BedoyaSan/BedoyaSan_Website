import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [visitors, setVisitors] = useState('');
  const [view, setView] = useState('Home');

  useEffect(() => {
    fetch('https://bedoyasanfunctions.azurewebsites.net/api/visitorcount')
      .then((response) => response.json())
      .then((result) => {
        console.log("Result", result);
        if (result?.value !== null) {
          setVisitors(result.value)
        }
      })
  }, [])

  return (
    <div className='font-FontSan'>
      {view === 'Home' && <Home visitors={visitors} setView={setView} />}
      {view === 'About' && <About setView={setView}/>}
      {view === 'Projects' && <Projects setView={setView}/>}
    </div>
  )
}

export default App
