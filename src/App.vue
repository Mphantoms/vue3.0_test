<template>
  <div>
    <p>{{name}}</p>
    <button @click="dec()">change</button>
    <button @click="inc()">change2</button>
    <router-link to="/">111</router-link>
    <router-link to="/next">我是next</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed,onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useStore,mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore()
    let name = computed(()=>store.state.name)
    function inc(){
      store.commit('inc')
    }
    function dec(){
      store.commit('dec')
    }
    onMounted(()=>{
      console.log('onMounted')
    })
    return {
      name,
      inc,
      dec
    }
  },
}
</script>
