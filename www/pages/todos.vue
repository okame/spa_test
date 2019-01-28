<template>
  <div>
    <h1 class="title is-2">
      TODOページです
    </h1>
    <ul class="has-text-left">
      <Todo v-for="todo in todos" :key="todo.id" :item="todo" @destroy="destroy" />
    </ul>
    <div class="field has-addons input-box">
      <div class="control is-expanded">
        <input v-model="todoText" @keyup.enter="add" class="input is-large" type="text" placeholder="TODO"></input>
      </div>
      <div class="control">
        <button class="button is-info is-large" @click="add">
          追加
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/todos/todo'

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

  methods: {
    reset() {
      this.todoText = ''
    },
    add() {
      const id = new Date().getTime()
      const todoItem = { text: this.todoText, id }
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
