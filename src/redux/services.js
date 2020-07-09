import axios from 'axios'

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const screenWidth = document.documentElement.clientWidth;
let count = 5;
if(screenWidth < 768) {
  count = 3
} else {
  count = 6
}

const API_PATH = {
  USERS: '/users',
  POSITIONS: '/positions',
  TOKEN: '/token',
}

//API USERS
export const users = () => {

  const all = async (page) => {
    return await axios.get(`${API_PATH.USERS}?page=${page}&count=${count}`)
  }

  const create = async (data, token) => {
    return await axios.post(API_PATH.USERS, data, {headers : {'Token': token}})
  }

  return {create, all}
}

//API CONTROLLER
export const controller = () => {

  const positions = async () => {
    return await axios.get(`${API_PATH.POSITIONS}`)
  }

  const token = async () => {
    return await axios.get(`${API_PATH.TOKEN}`)
  }

  return {positions, token}
}


