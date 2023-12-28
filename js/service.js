
import { handleErrors } from "./exception.js";


var URL = 'http://localhost:3000/blog';

export const getAllBlog = async () => {
    try {
       
        const response = await fetch(URL);

        handleErrors(response);

        return response.json();
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};
