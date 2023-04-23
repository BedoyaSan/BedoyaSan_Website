import './Home.css'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

function Home({ visitors, setView }: any) {
    return (
        <>
            <div id="HomePage" className="bg-NavyTealSan-Strong text-NavyTealSan-Light h-screen w-screen min-h-[500px] min-w-[275px] sm:grid grid-cols-12 grid-rows-6 flex flex-col">
                <div className='row-start-2 row-end-4 col-start-7 col-end-12 p-5 sm:text-8xl text-4xl flex flex-col justify-evenly'>
                    <h1>SANTIAGO</h1>
                    <h1 className='sm:pl-10 sm:pt-2'>BEDOYA</h1>
                </div>
                <div className='row-start-4 row-end-5 col-start-8 col-end-12 text-xl flex flex-col justify-evenly p-4'>
                    <h2>Software Developer & System's Engineering Student</h2>
                </div>
                <div className='row-start-4 row-end-7 col-start-2 col-end-5 flex flex-col justify-center p-4'>
                    {/* <ul>
                        <li className='hover:cursor-pointer' onClick={() => { setView('About') }}>About</li>
                        <li className='hover:cursor-pointer' onClick={() => { setView('Projects') }}>Projects</li>
                    </ul> */}
                    <p>Visitors count: {visitors}</p>
                </div>
                <div className='row-start-5 row-end-7 col-start-8 col-end-12 flex flex-row'>
                    <div id='linkLinkedin'>
                        <a href='https://www.linkedin.com/in/bedoyasan/' target='_blank'><FaLinkedin size={70} className='p-4 hover:p-3' /></a>
                    </div>
                    <div id='linkGitHub'>
                        <a href='https://github.com/bedoyasan' target='_blank'><FaGithub size={70} className='p-4 hover:p-3' /></a>
                    </div>
                    <div id='linkDiscord'>
                        <a href='https://discordapp.com/users/San#4185' target='_blank'><FaDiscord size={70} className='p-4 hover:p-3' />
                        </a></div>
                </div>
            </div>
        </>
    )
}

export default Home