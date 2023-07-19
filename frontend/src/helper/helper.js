import { data } from "../data/data"
import { register, requestData, requestLogin, saveMessages } from "../services/requests"
import { format } from 'date-fns';

export const formatDate = (dateString) => {
    console.log(dateString);
    const date = new Date(dateString);

    const formattedDate = format(date, 'dd/MM/yyyy');

    return formattedDate;
};

export const getUserFromServer = async (user) => {
    try {
        await requestData(`/user/${user}`)
        return data.getPasswordMessage
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return data.notFoundUserMessage
        } else {
            return data.errorMessage
        }
    }
}

export const login = async (user, password) => {
    try {
        const userFromServer = await requestLogin("/user/login", { name: user, password })
        return { message: data.logedMessage, data: userFromServer }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { message: data.whrongPassword }
        } else {
            return { message: data.errorMessage }
        }
    }
}

export const registerUser = async (user, password) => {
    console.log(password, user);
    try {
        const userFromServer = await register("/user", { name: user, password })
        return { message: data.registeredMessage, data: userFromServer }
    } catch (error) {
        return { message: data.errorMessage }
    }
}

export const finalizeChat = async (user, messages) => {
    try {
        await saveMessages('/messages', { user, messages })
        return { message: data.goodbyeMessage }
    } catch (error) {
        return { message: data.errorMessage }
    }
}