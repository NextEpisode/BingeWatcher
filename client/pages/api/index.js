import axios from "axios";


const url = process.env.STRAPI_DOMAIN + "api/strapi-forums";



export const readForum = () => axios.get(url);