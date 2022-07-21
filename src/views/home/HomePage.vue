<script setup>
import { ref, reactive } from 'vue'
import HomeIntro from './components/HomeIntro.vue'

const count = ref(0)
const message = reactive({
  greeting: '❤️ Hello',
  name: 'Naruto'
})

const handleAddCount = () => {
  count.value++
}

</script>

<template>
  <HomeIntro :count="count" :message="message" @onAddCount="handleAddCount" />
</template>