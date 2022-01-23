import React from 'react'
const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
			<div className="card">
			<img className="card-img" src="https://source.unsplash.com/random/?night,city" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Url Shortener</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn">LEARN MORE <span>&rarr;</span></button>
		      </div>
		    </div>
		    <div className="card">
			<img className="card-img" src="https://source.unsplash.com/random/?city,night" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">E-Voting</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn">LEARN MORE <span>&rarr;</span></button>
		      </div>
		    </div>
		    <div className="card">
			<img className="card-img" src="https://source.unsplash.com/random/?city,night" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Chat Application</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn">LEARN MORE <span>&rarr;</span></button>
		      </div>
		    </div>
		</div>
	)
}

export default Project