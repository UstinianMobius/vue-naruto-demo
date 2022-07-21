<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from '@/hooks/useRouter'

const route = useRoute()
const router = useRouter()

/* v2.7.x内置了defineEmits编译器宏，直接在<script setup>内部使用来发布事件 */
const emit = defineEmits(['onAddCount'])

/* v2.7.x内置了defineProps编译器宏，直接在<script setup>内部使用来接收父组件传过来的数据 */
defineProps({
    message: { type: Object, default: () => { } },
    count: { type: Number, default: () => 0, require: true }
})

watch(route, () => {
    console.log('route变化', route.value)
})

const handleAddCount = () => {
    emit('onAddCount')
}

const handleAboutPage = () => {
    router.push({ path: '/about', query: { date: Date.now() } })
}


</script>

<template>
    <div>
        <h1>{{ message?.greeting }} {{ message?.name }}</h1>
        <button class="btn" @click="handleAddCount">{{ count }}</button>
        <button class="btn" @click="handleAboutPage">About</button>
    </div>
</template>

<style>
.btn {
    margin: 0 15px;
    width: 100px;
    height: 50px;
    font-size: 20px;
}
</style>