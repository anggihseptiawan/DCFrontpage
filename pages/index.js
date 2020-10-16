import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Courses from "../components/Courses";
import instance from "../config/axios";

export default function Home({ data }) {
	console.log(data);
	return (
		<>
			<Head>
				<title>Daily Course</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="header-clipping pt-10">
				<div className="sunshine"></div>
				<div className="container mx-auto">
					<Header onLight />
					<Hero />
				</div>
			</header>
			<main>
				<section className="container mx-auto pt-24">
					<Clients />
					<Courses courses={data} />
				</section>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	try {
		const getData = await instance("/courses");
		return {
			props: {
				data: getData.data.data,
			},
		};
	} catch (error) {
		console.error(error);
	}
}
