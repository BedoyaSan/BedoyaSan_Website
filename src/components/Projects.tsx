
function Projects({ setView }: any) {
	return (
		<>
			<div id='ProjectsPage' className='bg-NavyTealSan-Strong text-NavyTealSan-Light h-screen w-screen min-h-[500px] min-w-[275px]'>
				<p>Projects</p>
				<p><a className='hover:cursor-pointer' onClick={() => { setView('Home') }}>Go Home</a></p>
			</div>
		</>
	)
}

export default Projects