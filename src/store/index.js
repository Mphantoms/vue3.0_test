import { createStore } from 'vuex'

const state = {
  name: 'My name is vuex'
}
const mutations = {
  dec: (state)=>{
    state.name = "hello"
  },
  inc: (state) => {
    state.name = "world"
  }
}

export const store = createStore({
  state,
  mutations,
})