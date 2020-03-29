import axios from 'axios'

const api = axios.create({
    baseURL: 'http://DELLG3:3333/' //Host:port of backend API 
})

export default api