import React from 'react'
import Image from "next/image"
const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
			<div className="card">
			<Image className="card-img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Url Shortener</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn font-semibold">Learn more <span>&rarr;</span></button>
		      </div>
		    </div>
		    <div className="card">
			<Image className="card-img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">E-Voting</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn font-semibold">Learn more <span>&rarr;</span></button>
		      </div>
		    </div>
		    <div className="card">
			<Image className="card-img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Chat Application</h2>
		        <p className="card-text text-sm">Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.</p>
		        <button className="card-btn font-semibold">Learn more <span>&rarr;</span></button>
		      </div>
		    </div>
		</div>
	)
}

export default Project