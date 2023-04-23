
function About({ setView }: any) {
    return (
        <>
            <div id='AboutPage' className='bg-NavyTealSan-Strong text-NavyTealSan-Light h-screen w-screen min-h-[500px] min-w-[275px]'>
                <p>About</p>
                <p><a className='hover:cursor-pointer' onClick={() => { setView('Home') }}>Go Home</a></p>
            </div>
        </>
    )
}

export default About