/* 
由于vue2.x中只能使用vue-router3.x版本，且对Composition-API支持不太友好
故封装useRouter和useRoute两个方法，还原vue-router4.x用法，更为便捷
*/

import { getCurrentInstance, shallowRef } from 'vue'
import { router } from '@/router'

// useRouter 
export const useRouter = () => {
    const vm = getCurrentInstance()

    if (vm) {
        return router
    }

    console.error('只能在setup中调用useRouter')
    return false
}

// useRoute
let currentRoute = shallowRef()
export const useRoute = () => {
    if (!currentRoute.value) {
        const vm = getCurrentInstance()

        if (!vm) {
            console.error('只能在setup中调用useRoute')
            return false
        }

        currentRoute.value = vm.proxy.$route

        const router = useRouter()
        router.afterEach(to => (currentRoute.value = to))
    }
    return currentRoute
}
