import { useEffect, useState } from 'react';
import './App.css';

import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [visitors, setVisitors] = useState('');

  useEffect(() => {
    fetch('https://bedoyasanfunctions.azurewebsites.net/api/visitorcount')
    .then((response) => response.json())
    .then((result) => {
      console.log("Result", result);
      if(result?.value !== null) {
        setVisitors(result.value)
      }
    })
  }, [])

  return (
    <div className='font-FontSan'>

      <div id="HomePage" className="bg-NavyTealSan-Strong text-NavyTealSan-Light h-screen w-screen min-h-[500px] min-w-[275px] divScroller sm:grid grid-cols-12 grid-rows-6
      flex flex-col">
        <div className='row-start-2 row-end-4 col-start-6 col-end-11 p-5 sm:text-8xl text-4xl flex flex-col justify-evenly'>
          <div>SANTIAGO</div>
          <div className='sm:text-center'>BEDOYA</div>
        </div>
        <div className='row-start-4 row-end-5 col-start-8 col-end-12 text-xl flex flex-col justify-evenly p-4'>
          <div>Software Developer & System's Engineering Student</div>
        </div>
        <div className='row-start-5 row-end-6 col-start-8 col-end-12 flex flex-row'>
          <a href='https://www.linkedin.com/in/bedoyasan/' target='_blank'><FaLinkedin size={70} className='p-4' /></a>
          <a href='https://github.com/bedoyasan' target='_blank'><FaGithub size={70} className='p-4' /></a>
          <a href='https://discordapp.com/users/San#4185' target='_blank'><FaDiscord size={70} className='p-4' /></a>
        </div>
        <div className='row-start-4 row-end-7 col-start-2 col-end-5 flex flex-col justify-center p-4'>
          {visitors && <p>Visitors: {visitors}</p>}
        </div>
      </div>
    </div>
  )
}

export default App
