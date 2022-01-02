import React from 'react'

function About() {
	return (
		<div style={{flex:'0.4'}} className="py-10 about-container flex jusitfy-center flex-col">
			<img src="rahul.jpg" className="w-60 h-52 mx-auto profile"/>
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
		</div>
	)
}

export default About