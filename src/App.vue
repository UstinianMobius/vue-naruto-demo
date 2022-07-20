<script setup>
import { ref, reactive } from 'vue'
import HelloNaruto from './components/HelloNaruto.vue'

const count = ref(0)

const message = reactive({
  greeting: '❤️ Hello',
  name: 'Naruto'
})

const handleAddCount = () => {
  count.value ++
}

</script>

<template>
  <div id="app">
    <img src="./assets/naruto.jpg" />
    <HelloNaruto 
      :message="message" 
      :count="count" 
      @onAdd="handleAddCount"
    />
  </div>
</template>

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