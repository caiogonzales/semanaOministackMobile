import axios from 'axios'

const api = axios.create({
    baseURL: 'http://136.140.151.86:3333'
})

export default api