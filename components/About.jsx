import React from 'react'
function About() {
	return (
		<div style={{flex:'0.5'}} className="py-10 about-container flex jusitfy-center flex-col">
		  <h1 className="text-gray-800 text-center">ABOUT</h1>
			<img src="rahul.jpg" className="w-56 h-56 mx-auto profile" alt="profile"/>
			  <div className="w-80 mx-auto">
			      <p className="text-sm text-center mt-2 text-zinc-800">
			        Hi 👋 I'm Rahul. I have completed my graduation with a Bachelor of Computer Applications and pursuing MCA from IGNOU.
			      </p>
			      <p className=" text-sm text-center mt-2 text-zinc-800">
			        Aside from that, I work as a full-stack developer at Mushin Innovation Labs. My expertise is in creating web applications using  Reactjs, Nodejs, and MongoDB.
			      </p>
			  </div>
			  <div className="flex justify-center mt-3">
			  	<a href="resume.pdf" target="_blank" rel="noreferrer">
			  		<button className="text-xs p-1 text-white tracking-wide hover:bg-white hover:text-custom-pink transition duration-500 border border-custom-pink p-2 bg-custom-pink">DOWNLOAD CV</button>
			  	</a>
			  </div>
		</div>
	)
}

export default About