import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import propTypes from "prop-types";

export default function Header({ onLight }) {
	const router = useRouter();

	const linkCTA =
		router.pathname.indexOf("/login") > -1
			? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
			: `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
	const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

	return (
		<header className="flex justify-between items-center">
			<div className="logo" style={{ height: 55 }}>
				<img className="on-dark" src="/images/logo.svg" alt="" />
			</div>
			<ul className="flex">
				<li>
					<Link href="/">
						<a
							className={[
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a
							className={[
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Pricing
						</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a
							className={[
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Features
						</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a
							className={[
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Story
						</a>
					</Link>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferer"
						href={linkCTA}
						className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white text-lg px-6 py-3 ml-6"
					>
						{textCTA}
					</a>
				</li>
			</ul>
		</header>
	);
}

Header.propTypes = {
	onLight: propTypes.bool,
};
