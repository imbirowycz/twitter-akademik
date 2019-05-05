export default {
    namespaced: true,
    state: {
      user: null
    },
    mutations: {
      createdUser (state, payload) {
          // console.log(payload)
        state.user = Object.assign ({}, payload)
        // console.log('user - ', state.user)
      },
      setPasswordInUser (state, payload) {
        state.user.password =  payload;
        // console.log('user - ',state.user)
      }
  
    },
    actions: {
      createAd ({commit}, payload) {
        const id = Math.floor(Math.random() * 11)
        payload.id = id.toString();
        console.log(payload)
  
        commit('createAd', payload)
  
      },
      createdUser ({commit}, payload) {
        commit('createdUser', payload)
      }
    },
    getters: {
      userGet (state) {
        return state.user
      }
    }
  }
