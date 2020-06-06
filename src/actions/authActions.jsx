import axios from "axios";
import urls from "../common/urls";

// ensures cookie returned from server is set on browser, removes need for axios instance
axios.defaults.withCredentials = true;

export const login = async (email, password) => {
    const response = await axios.post(
        `${urls.backend}/auth`,
        {
            email,
            password,
        }
    );
    return response.data;
};

export const checkIfLoggedIn = async () => {
    const response = await axios.get(`${urls.backend}/auth/check`);
    return response.data;
}

export const register = async (email, password, confirmPassword) => {
    const response = await axios.post(
        `${urls.backend}/users`,
        {
            email,
            password,
            confirmPassword,
        }
    );
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${urls.backend}/auth/logout`);
    return response.data;
}
