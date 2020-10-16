import React from "react";

const Hero = () => {
	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="flex justify-between items-center mt-5">
			<div className="w-1/2">
				<h1 className="text-5xl text-white font-semibold mb-5">
					<span className="text-teal-400">
						The New Way <br />
					</span>
					to Achieve
					<span className="text-teal-400"> Good Skills </span>
				</h1>
				<p className="text-white text-lg mb-8">
					We provide tons of pathskill that you <br /> can choose and
					focus on
				</p>

				<form action="#" onSubmit={submit}>
					<input
						type="text"
						className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
						placeholder="Your email"
					/>
					<button className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 focus:outline-none text-white px-6 py-3">
						Register Now
					</button>
				</form>
			</div>
			<div className="w-1/2 flex justify-end pt-16 pr-16">
				<div className="relative" style={{ width: 369, height: 440 }}>
					<div
						className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
						style={{ width: 324, height: 374 }}
					></div>
					<div className="absolute w-full h-full -mb-8 -ml-8">
						<img src="/images/hero-image.jpg" alt="" />
					</div>
					<div
						className="absolute z-10 bg-white py-3 px-4 mt-24"
						style={{ transform: "translateX(-70%)", width: 290 }}
					>
						<p className="text-gray-900 mb-2">
							Metode belajar santai seperti nonton drakor di
							netflix
						</p>
						<span className="text-gray-600">
							Allysa, Mobile Developer
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
