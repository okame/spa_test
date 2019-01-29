import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  async fetchTodos() {
    const response = await axios.get('/todos')
    return response.data.todos
  },

  async createTodo(todo) {
    const response = await axios.post('/todos', { todo })
    return response.data
  }
}
