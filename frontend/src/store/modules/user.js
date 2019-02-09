const state  = {
  user: null
}

const mutations = {
  auth({commit}, {email, password, repassword}){
    console.log('email password repassword = ', email, password, repassword);
  }
}

const actions = {
  auth({commit}, {email, password, repassword}){
    console.log('email password repassword = ', email, password, repassword);
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}