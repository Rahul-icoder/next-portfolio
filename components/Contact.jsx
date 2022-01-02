function contact() {
	return (
		<div className="flex h-screen flex-col justify-center items-center relative">
			<div className="absolute left-6 sm:left-16 top-10 lg:left-30">
				<h1 className="text-4xl font-bold text-gray-800 text-gray-900">Let's talk.</h1>
				<p className="text-lg sm:text-xl mt-7 text-gray-900">Get in touch via the form below, or by email <span className="text-yellow-500">rahulkerma12345@gmail.com</span></p>
			</div>
			<div className="w-4/5 sm:w-7/12">	
				<div className="flex flex-col mt-5">
					<label htmlFor="name" className="text-lg sm:text-xl pl-2 font-semibold text-gray-800 mb-2">Name:</label>
					<input type="text" id="name" required className="bg-gray-700 text-white text-lg pl-5 tracking-wide  rounded-3xl p-3 outline-none" name="name" value="Rahul"/>
				</div>
				<div className="flex flex-col mt-6">
					<label htmlFor="email" className="text-lg sm:text-xl pl-2 font-semibold text-gray-800 mb-2">Email Address:</label>
					<input type="email" id="email" className="bg-gray-700 text-white text-lg pl-5 tracking-wide  rounded-3xl p-3 outline-none" name="name" value="rahulkerma12345@gmail.com"/>
				</div>
				<div className="flex flex-col mt-6">
					<label htmlFor="body" className="text-lg sm:text-xl pl-2 font-semibold text-gray-800 mb-2">Message:</label>
					<textarea type="body" id="body" className="bg-gray-700 text-white text-lg pl-5 tracking-wide rounded-3xl p-3 outline-none" name="name" />
				</div>
				<button className="m-3 text-yellow-300 p-3 rounded-2xl w-36 mt-6 font-semibold bg-gray-700">Submit</button>
			</div>	
		</div>
	)
}

export default contact