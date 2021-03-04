import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-5f336-default-rtdb.firebaseio.com/'
})