import axios from "../../config/axios";

export default {
	all: () => axios.get("/courses").then((res) => res.data),
	details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
};
