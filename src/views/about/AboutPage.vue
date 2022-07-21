<script setup>
import { ref, shallowRef } from 'vue'
import { useRouter } from '@/hooks/useRouter'
import AboutInfo from './components/AboutInfo.vue'

const router = useRouter()
const intro = shallowRef(`I'm About`)

/* 可以通过ref来获取子组件实例以及当前组件暴露出来的property */
const aboutInfo = ref(null)
const message = ref('')
const handleReceive = () => {
    message.value = aboutInfo.value?.message
}

/* 返回首页 */
const handleBackHome = () => {
    router.push('/')
}
</script>

<template>
    <div>
        <h1>{{ intro }}</h1>
        <h1>{{ message }}</h1>
        <button class="about-btn" @click="handleBackHome">返回首页</button>
        <button class="about-btn" @click="handleReceive">接收子组件暴露出来的内容</button>
        <AboutInfo ref="aboutInfo" />
    </div>
</template>

<style scoped>
.about-btn {
    margin: 0 15px;
    padding: 0 10px;
    height: 50px;
    font-size: 20px;
}
</style>