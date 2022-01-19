import React from 'react'

const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
			<div className="card relative">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title text-xs">Url Shortener</h2>
					<a href="" className="card-demo text-xs">Demo</a>
				</div>
			</div>
			<div className="card relative">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title text-xs">Transformer</h2>
					<a href="" className="card-demo text-xs">Demo</a>
				</div>
			</div>
			<div className="card relative group">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-black w-full py-6 bottom-0 ">
					<h2 className="card-title text-xs">Plotter</h2>
					<a href="" className="card-demo text-xs">Demo</a>
				</div>
			</div>
		</div>
	)
}

export default Project