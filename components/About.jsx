import React from 'react'
import Image from "next/image"
function About() {
	return (
		<div style={{flex:'0.5'}} className="py-10 about-container flex jusitfy-center flex-col">
		  <h1 className="text-gray-800 text-center">ABOUT</h1>
			<Image src="rahul.jpg" className="w-60 h-60 mx-auto profile" alt="profile"/>
			  <h3 className="text-center mt-2 font-semibold text-gray-800">Who's this guy?</h3>
			  <div className="w-80 mx-auto">
			      <p className="text-sm text-center mt-2 text-zinc-800">
			        Hello I'm Rahul , Software Engineer at mushinlabs
			        and feeling good while tackle chanllenges.
			      </p>
			      <p className=" text-sm text-center mt-2 text-zinc-800">
			        Hello I'm Rahul , Software Engineer at mushinlabs
			        and feeling good while tackle chanllenges.
			      </p>
			  </div>
			  <div className="flex justify-center mt-3">
			  	<button className="text-sm p-1 text-white tracking-wide hover:bg-white hover:text-teal-600 transition duration-500 border border-teal-600 p-2 bg-teal-600">DOWNLOAD CV</button>
			  </div>
		</div>
	)
}

export default About