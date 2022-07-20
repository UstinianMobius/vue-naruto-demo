<script setup>

/* v2.7.x内置了defineProps编译器宏，直接在<script setup>内部使用来接收父组件传过来的数据 */
defineProps({
  message: { type: Object, default: () => {} },
  count: { type: Number, default: () => 0 , require: true }
})

/* v2.7.x内置了defineEmits编译器宏，直接在<script setup>内部使用来发布事件 */
const emit = defineEmits(['onAdd'])
const handleAddCount = () => {
  emit('onAdd')
}

</script>

<template>
  <div>
    <h1>{{ message?.greeting }}  {{ message?.name }}</h1>
    <button class="count-btn" @click="handleAddCount">{{count}}</button>
  </div>
</template>

<style>
  .count-btn {
    width: 80px;
    height: 50px;
    font-size: 20px;
  }
</style>