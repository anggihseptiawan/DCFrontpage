import Head from "next/head";
import Link from "next/link";

export default function About() {
	return (
		<>
			<Head>
				<title>Daily Course</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<div className="container mx-auto">
					<h1>About page</h1>
					<Link href="/">
						<a>Home page</a>
					</Link>
				</div>
			</header>
		</>
	);
}
