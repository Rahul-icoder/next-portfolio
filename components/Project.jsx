import React from 'react'

const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
			<div className="card relative group">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-gray-100 w-full py-6 bottom-0 opacity-0 group-hover:opacity-100 transition duration-500">
					<h2 className="card-title">Url Shortener</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
			<div className="card relative group transition duration-500">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-gray-100 w-full py-6 bottom-0 opacity-0  group-hover:opacity-100 transition duration-500 ">
					<h2 className="card-title">Transformer</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
			<div className="card relative group ">
				<img src="url-shortener.jpg" alt="project" className="card-img"/>
				<div className="card-content absolute bg-gray-100 w-full py-6 bottom-0 flex opacity-0  group-hover:opacity-100 transition duration-500">
					<h2 className="card-title">Plotter</h2>
					<a href="" className="card-demo">Demo</a>
				</div>
			</div>
		</div>
	)
}

export default Project