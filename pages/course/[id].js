import Head from "next/head";
import courses from "../api/courses";
import YouTube from "react-youtube";
import Header from "../../components/Header";
import IconNameTag from "../../public/images/icon-nametag.svg";
import IconPlayBack from "../../public/images/icon-playback.svg";
import IconCertificate from "../../public/images/icon-certificate.svg";
import Feature from "../../components/Feature";
import { CSSTransition } from "react-transition-group";
import formatNumber from "../../utils/formatNumber";
import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer";

export default function CourseDetail({ data }) {
	console.log(data);

	const [sticky, setSticky] = useState(true);
	const footer = useRef(null);

	useEffect(() => {
		const stickyOfsetTop = footer.current.getBoundingClientRect().top;
		const stickyMetaToggler = () => {
			setSticky(
				stickyOfsetTop >= window.pageYOffset + window.innerHeight
			);
		};

		window.addEventListener("scroll", stickyMetaToggler);

		return () => {
			window.removeEventListener("scroll", stickyMetaToggler);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Daily Course | {data.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section
				className="pt-10 relative overflow-hidden"
				style={{ height: "80vh" }}
			>
				{data?.chapters[0]?.lessons[0]?.video && (
					<div className="video-wrapper">
						<YouTube
							videoId={data?.chapters[0]?.lessons[0]?.video}
							id={data?.chapters[0]?.lessons[0]?.video}
							opts={{
								playerVars: {
									loop: 1,
									autoplay: 1,
									mute: 1,
									controls: 0,
									showinfo: 0,
								},
							}}
							onEnd={(e) => e.target.playVideo()}
						></YouTube>
					</div>
				)}
				<div className="absolute inset-0 z-0 w-full h-full bg-black opacity-50"></div>
				<div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
					<div className="text-center">
						<h3 className="text-lg text-white">Kelas Online :</h3>
						<h4 className="text-6xl text-teal-400 font-semibold">
							{data.name}
						</h4>
					</div>
				</div>
				<div className="container mx-auto z-10 relative">
					<Header />
				</div>
			</section>

			<section className="container mx-auto pt-24 relative">
				<div className="absolute top-0 left-0 w-full transform -translate-y-1/2">
					<div className="w-3/4 mx-auto">
						<div className="flex justify-between">
							<Feature
								data={{
									icon: (
										<IconNameTag className="fill-current text-teal-500" />
									),
									title: "Student",
									value: data.total_student ?? 0,
								}}
							/>
							<Feature
								data={{
									icon: (
										<IconPlayBack className="fill-current text-teal-500" />
									),
									title: "Total Video",
									value: data.total_videos ?? 0,
								}}
							/>
							<Feature
								data={{
									icon: (
										<IconCertificate className="fill-current text-teal-500" />
									),
									title: "Certificate",
									value:
										data.certificate === 1
											? "Tersedia"
											: "Tidak tersedia",
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<CSSTransition
						in={sticky}
						timeout={300}
						className="price-wrapper w-full bg-white z-50 left-0 py-3"
						unmountOnExit
					>
						<div className="meta-price">
							<div className="w-3/4 mx-auto">
								<div className="flex items-center">
									<div className="w-full">
										<h2 className="text-gray-600">
											Nama Kelas
										</h2>
										<h3 className="text-2xl text-gray-900">
											{data.name ?? "Nama Kelas"}
										</h3>
									</div>
									<h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
										{data?.type === "free" ? (
											"Free"
										) : (
											<span>
												Rp.{" "}
												{formatNumber(data.price) ?? 0}
											</span>
										)}
									</h5>
									<a
										href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
										className="bg-orange-500 hover:bg-orange-600 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-no-wrap"
										target="_blank"
										rel="noopener noreferer"
									>
										{data.type === "free"
											? "Enroll now"
											: "Buy Now"}
									</a>
								</div>
							</div>
						</div>
					</CSSTransition>
				</div>
				<div className="w-3/4 mx-auto mt-8">
					<div className="description">
						<h6 className="font-medium text-gray-900 text-2xl mb-4">
							About <span className="text-teal-500">Course</span>
						</h6>
						<p className="text-gray-600 text-lg mb-3">
							{data.description ?? "No Description"}
						</p>
					</div>
				</div>
			</section>
			<section className="footer bg-indigo-900 mt-24" ref={footer}>
				<Footer />
			</section>
		</>
	);
}

export async function getServerSideProps(props) {
	const { id } = props.query;

	try {
		const getData = await courses.details(id);
		return {
			props: {
				data: getData,
			},
		};
	} catch (error) {
		console.error(error);
	}
}
