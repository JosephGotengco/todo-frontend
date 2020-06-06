import axios from "axios";
import urls from "../common/urls";

// ensures cookie returned from server is set on browser, removes need for axios instance
axios.defaults.withCredentials = true;

export const addTodo = async (message) => {
    const response = await axios.post(`${urls.backend}/todos`, {
		todo: {
			message,
			done: false
		}
	});
    return response.data;
};

export const deleteTodo = async (todo) => {
	const response = await axios.delete(`${urls.backend}/todos`, {
        data: {
            todo,
        },
    });
	return response.data;
}
