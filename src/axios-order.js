import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sandwich-maker-388c0.firebaseio.com/'
})

export default instance;