import React from 'react'
const Project = () => {
	return (
		<div className="project-grid px-6 py-10">
		   <div className="card">
			<img className="card-img" src="project3.png" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Partdekho</h2>
		        <p className="card-text text-sm">Developed partdekho.com, an ecommerce web application created using MERN stack. In Which customers
can buy premium automobiles parts.</p>
				<a href="https://partdekho.com" target="noreferrer">
		        	<button className="card-btn">LEARN MORE <span>&rarr;</span></button>
		        </a>
		      </div>
		    </div>
			<div className="card">
			<img className="card-img" src="project1.png" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Url Shortener</h2>
		        <p className="card-text text-sm">It working is by taking a long URL to create a short URL. And anyone
who can share this URL will be redirected to the original URL.</p>
		        <a href="https://rahly.herokuapp.com" target="noreferrer">
		        	<button className="card-btn">LEARN MORE <span>&rarr;</span></button>
		        </a>
		      </div>
		    </div>
		    <div className="card">
			<img className="card-img" src="project2.png" alt="project"/>
		      <div className="card-content">
		        <h2 className="card-header text-xl text-gray-800">Mushin Aqua</h2>
		        <p className="card-text text-sm">Developed auditing software using MERN stack, to check Honda compliance norms under 6 months.
		        Which has two types of user Admin and Supervisor.
</p>
		        <button className="card-btn">No Link <span>&rarr;</span></button>
		      </div>
		    </div>
		    
		</div>
	)
}

export default Project