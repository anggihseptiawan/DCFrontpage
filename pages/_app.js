import NProgress from "nprogress";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "../styles/main.css";
import "nprogress/nprogress.css";

NProgress.configure({});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer position="top-center"></ToastContainer>
		</>
	);
}

export default MyApp;
