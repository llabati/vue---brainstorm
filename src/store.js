import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
const state = {
  ideas: [],
  now: [],
  later: [],
  users: [],
  currentUser: ''
}
const getters = {
  getAllIdeas(state){
      return state.ideas
  },
  getNow(state){
    return state.now
  },
  getLater(state){
    return state.later
  },
  findUser(state, userName){
    return state.users.userName
  }
}

const actions = {
  createIdea(context, idea){
      context.commit('addIdea', idea)
  },
  saveNewOrder( { commit }, payload) {
    console.log(payload)
    const ideas = []
    payload.map(idea => {
      ideas.push(idea)
    })
    console.log(ideas)
    commit('reorderIdeas', ideas)
  },
  setInNow( { commit }, payload){
    console.log('ACTnow', payload)
    commit('setNewNow', payload)
  },
  setInLater( { commit }, payload){
    console.log('ACTlater', payload)
    commit('setNewLater', payload)
  }
}

const mutations = {
  addIdea(state, idea){
      const id = state.ideas.length
      state.ideas[id] = idea
      state.ideas = [ ...state.ideas ]
  },
  reorderIdeas(state, ideas){
    state.ideas = [ ...ideas ]

  },
  setNewNow(state, payload){
    console.log('MUTnow', payload)
    state.now = [ ...payload ]
  },
  setNewLater(state, payload){
    console.log('MUTlater', payload)
    state.later = [ ...payload ]
  },
  addUser(state, userName){
    //state.users =[]
    console.log('USERNAME TO STORE', userName)
    state.users.push(userName)
  },
  updateCurrentUser(state, userName){
    state.currentUser = userName
  }
}

const store = new Vuex.Store({ state, getters, actions, mutations, plugins: [vuexLocal.plugin] })

export default store 
