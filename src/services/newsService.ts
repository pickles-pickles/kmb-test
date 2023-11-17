import axios from 'axios'

const BASE_URL = `http://newsapi.org/v2/everything?q=a&apiKey=${process.env.REACT_APP_API_KEY}`

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// GET all news
const getAllNews = () => axiosInstance.get(BASE_URL + '&page=3&pageSize=6')
const getFilterdNews = (page: string | number, pageSize: string | number) =>
  axiosInstance.get(BASE_URL + `&page=${page}&pageSize=${pageSize}`)

// Export all functions
export { getAllNews, getFilterdNews }
