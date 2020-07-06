<template>
    <div>
        <button @click="getData()">点我</button>
    </div>
</template>

<script>
    import { callHttp } from '../utils/common'
    export default {
        setup(){
            async function getData(){
                let opt = {
                    url: '/api/all_news?page=0',
                }
                let data = await callHttp(opt);
                console.log(data);
            }
            return {
                getData
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>