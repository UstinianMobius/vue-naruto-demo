<script setup>
import { ref } from 'vue'
const message = ref('我是子组件暴露出来的内容')
/* v2.7.x内置了defineExpose编译器宏，直接在<script setup>内部使用来暴露property */
defineExpose({ message })
</script>

<template>
    <div></div>
</template>

<style scoped>
</style>