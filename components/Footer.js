import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="container mx-auto py-10">
			<div className="flex">
				<div className="w-1/6">
					<h6 className="text-white">Company</h6>
					<ul className="mt-4">
						<li className="mt-2">
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									API Devloper
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Career
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Our Story
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									New soon
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-1/6">
					<h6 className="text-white">Student</h6>
					<ul className="mt-4">
						<li className="mt-2">
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Get Scholarship
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Our Pathskill
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									All features
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Privacy Policy
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-1/6">
					<h6 className="text-white">Get In Touch</h6>
					<ul className="mt-4">
						<li className="mt-2">
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Micro center
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Jl. Sudirman
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Kav. 88-89
								</a>
							</Link>
							<Link href="/">
								<a className="text-indigo-600 block hover:text-teal-500">
									Jakarta Selatan
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
