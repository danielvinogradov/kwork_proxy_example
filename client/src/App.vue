<template>
  <div>
    <h1>Express Proxy Example</h1>
    <button @click="getTodos">load todos</button>
    <button @click="() => this.todos = null">clear</button>
    <button @click="sendPost">send post request</button>

    <h2>res</h2>
    <pre>{{ todos }}</pre>

    <h2>req</h2>
    <pre>{{ req }}</pre>
  </div>
</template>

<script>
  import {TodosAPI} from "@/api/TodosAPI";

  export default {
    name: 'App',
    data() {
      return {
        todos: null,
        req: null
      }
    },
    methods: {
      getTodos() {
        TodosAPI.getData()
            .then(res => res.json())
            .then(json => this.todos = json);
      },

      sendPost() {
        TodosAPI.postData({ title: 'some title', body: 'some body', userId: 444 })
            .then(res => res.json())
            .then(json => this.req = json);
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
