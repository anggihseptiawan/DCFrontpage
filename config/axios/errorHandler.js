import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function (error) {
	if (error) {
		let message;
		if (error.response.status === 500) message = "Something when wrong";
		else message = error.response.data.message;

		if (typeof message === "string") toast.error(message);

		return Promise.reject(error);
	}
}