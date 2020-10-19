import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Courses from "../components/Courses";
import instance from "../config/axios";
import ListCategory from "../components/ListCategory";
import Footer from "../components/Footer";

export default function Home({ data }) {
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
				</section>
				<section className="container mx-auto pt-24">
					<Courses courses={data} />
				</section>
				<section className="category container mx-auto pt-24">
					<ListCategory categories={data} />
				</section>
			</main>
			<section className="footer bg-indigo-900 mt-24">
				<Footer />
			</section>
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
