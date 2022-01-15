import React from 'react'

const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
			<div className="card relative">
				<img src="https://source.unsplash.com/random/1920x1080" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title">Code Grep</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
			<div className="card relative">
				<img src="https://source.unsplash.com/random/1920x1080" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title">Transformer</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
			<div className="card relative">
				<img src="https://source.unsplash.com/random/1920x1080" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title">Plotter</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
		</div>
	)
}

export default Project