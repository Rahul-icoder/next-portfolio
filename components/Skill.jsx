import React from 'react'

const Skill = () => {
	return (
		<div style={{flex:0.6}} className="skill-container pb-10 sm:py-10">
			<div class="flex jusitfy-center flex-col items-center px-5 sm:px-10 md:px-20 gap-4 font-mono">
					<div className="bg-gray-200 h-5 w-full react-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5 transition ease-in-out delay-150 "></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>85%</span>	
					</div>
					<div className="bg-gray-200 h-5 w-full next-container relative">
						<div style={{width:'80%'}}  className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>80%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full javascript-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>85%</span>
					</div>
					<div  className="bg-gray-200 h-5 w-full html-container relative">
						<div style={{width:'90%'}} className=" bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>90%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full css-container relative">
						<div style={{width:'90%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>90%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full node-container relative">
						<div style={{width:'75%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>75%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full python-container relative">
						<div style={{width:'70%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>70%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full sql-container relative">
						<div style={{width:'75%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>75%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full mongo-container relative">
						<div style={{width:'85%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>85%</span>	
					</div>
					<div className="bg-gray-200 h-5 w-full cplus-container relative">
						<div style={{width:'80%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>80%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full aws-container relative">
						<div style={{width:'60%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>60%</span>	
					</div>
					<div  className="bg-gray-200 h-5 w-full linux-container relative">
						<div style={{width:'65%'}} className="bg-teal-600 h-5"></div>
						<span className="absolute text-xs right-2 sm:right-3 text-gray-500" style={{top:'4px'}}>65%</span>	
					</div>
				</div>
		</div>
	)
}

export default Skill