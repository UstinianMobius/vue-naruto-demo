<script setup>
import { shallowRef } from 'vue'
import { useRouter } from '@/hooks/useRouter'

const router = useRouter()
const intro = shallowRef(`I'm About`)

const handleBackHome = () => {
    router.push('/')
}
</script>

<template>
    <div>
        <h1>{{ intro }}</h1>
        <button class="btn" @click="handleBackHome">返回首页</button>
    </div>
</template>

<style scoped>
.btn {
    width: 100px;
    height: 50px;
    font-size: 20px;
}
</style>