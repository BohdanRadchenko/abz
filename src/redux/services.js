import axios from 'axios'

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const API_PATH = {
  USERS: '/users',
}

//API USERS
export const users = () => {

  const all = async (data) => {
    const page = data.page
    const count = data.count
    return await axios.get(`${API_PATH.USERS}?page=${page}&count=${count}`)
  }

  const create = async data => {
    return await axios.post(API_PATH.USERS, data)
  }

  const update = async (id, body) => {
    return await axios.put(API_PATH.USER+ id, body)
  }

  const remove = async (id) => {
    return await axios.delete(API_PATH.USER + id)
  }

  return {create, all, update, remove}
}
