import axios from "axios";


const url = process.env.NEXT_PUBLIC_STRAPI_DOMAIN + "api/strapi-forums";



export const readForum = () => axios.get(url);