<template>
  <div>
    <h1 class="title is-2">
      TODO List
    </h1>
    <ul class="has-text-left">
      <Todo v-for="todo in todos" :key="todo.id" :item="todo" @destroy="destroy" />
    </ul>
    <div class="field has-addons input-box">
      <div class="control is-expanded">
        <input v-model="todoText" class="input is-large" type="text" placeholder="TODO" @keyup.enter="add"></input>
      </div>
      <div class="control">
        <button class="button is-info is-large" @click="add">
          ADD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/todos/todo'
import ApiHelper from '@/lib/api_helper'

export default {
  components: {
    Todo
  },

  data() {
    return {
      todos: [],
      todoText: ''
    }
  },

  async created() {
    this.todos = await ApiHelper.fetchTodos()
  },

  methods: {
    reset() {
      this.todoText = ''
    },
    async add() {
      const id = new Date().getTime()
      const todoItem = { text: this.todoText, id }
      await ApiHelper.createTodo(todoItem)
      this.todos.push(todoItem)
      this.reset()
    },
    destroy(item) {
      const index = this.todos.map(todo => todo.id).indexOf(item.id)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.input-box {
  margin-top: 20px;
}
</style>
