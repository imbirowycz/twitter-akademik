<template>
  <div id="app">
    <!--nawigacja strony-->
    <header id="nav" v-if="view">
      <h1>Header --> 'Nawigacja strony'</h1>
      <router-link to="/">Hello</router-link>
      <router-link to="/callservice">Service</router-link>
      <router-link to="/bootstrap">Bootstrap</router-link>
      <router-link to="/user">User</router-link>
    </header>
    <!-- Sidebar -->
    <sidebar class="sidebar" v-if="view"></sidebar>
    <!-- Main section -->
    <section class="main">
      <router-view></router-view>
    </section>
    <!-- footer -->
    <footer class="footer" v-if="view">
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script>

  import sidebar from './components/Sidebar';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to your Vue.js powered Spring Boot App',
        view: false,
        user: {}
      }
    },
    components: {
      sidebar
    },
    computed: {
      empty() {
        if(this.user.length === 0){
          return this.view = false;
        } else {
          return this.view = true;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../public/scss/variable";
  #app {
    min-height: 100vh;
    display:flex;
    flex-direction:column;

    .btn {

      &:focus, &:hover {
        outline: none;
      }
    }
    #nav {

      display: flex;
      justify-content: space-around;
      padding: 1rem;
      align-items: center;
      background: $gray400;
      color: white;

      a {
        font-weight: bold;
        color: white;
        transition: color .5s;

        &.router-link-exact-active {
          color: red;

        }
      }
    }

    .main{

      display: flex;
    }
    .routerView{



    }
    .footer{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      width: 100%;
      background: gray;
      margin-top: auto;

    }

  }
</style>
