import React from 'react';
const Skill = () => {
	return (
		<div style={{flex:0.5}} className="skill-container pb-10 md:py-10">
			<h1 className="text-gray-800 text-center">SKILLS</h1>
			<div className="flex jusitfy-center flex-col items-center px-5 sm:px-10 gap-4 font-mono">
					<div className="bg-gray-200 h-5 w-full react-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5 transition ease-in-out delay-150"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>85%</span>	
					</div>
					<div className="bg-gray-200 h-5 w-full next-container relative">
						<div style={{width:'80%'}}  className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>80%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full javascript-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>85%</span>
					</div>
					<div  className="bg-gray-200 h-5 w-full html-container relative">
						<div style={{width:'90%'}} className=" bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>90%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full css-container relative">
						<div style={{width:'90%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>90%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full node-container relative">
						<div style={{width:'75%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>75%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full python-container relative">
						<div style={{width:'70%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>70%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full sql-container relative">
						<div style={{width:'75%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>75%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full mongo-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>85%</span>	
					</div>
					<div className="bg-gray-200 h-5 w-full cplus-container relative">
						<div style={{width:'80%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>80%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full aws-container relative">
						<div style={{width:'60%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>60%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full linux-container relative">
						<div style={{width:'65%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-1 text-gray-500" style={{top:'2px'}}>65%</span>	
					</div>
				</div>
		</div>
	)
}

export default Skill