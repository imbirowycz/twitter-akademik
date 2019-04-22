<template>
  <div id="app" class="scroll-style height-100">
    <!--nawigacja strony-->
    <header id="nav" v-if="view">
      <h1>Header --> 'Nawigacja strony'</h1>
      <router-link to="/">Hello</router-link>
      <router-link to="/callservice">Service</router-link>
      <router-link to="/bootstrap">Bootstrap</router-link>
      <router-link to="/user">User</router-link>
    </header>

    <section class="main height-100" >
      <sidebar class="sidebar" v-if="view"></sidebar>
      <router-view :hellomsg="msg" class="routerView"></router-view>
    </section>

    <footer class="footer" v-if="view">
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script>
import sidebar from "./views/Sidebar";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to your Vue.js powered Spring Boot App",
      view: false,
      user: {}
    };
  },
  components: {
    sidebar
  },
  computed: {
    empty() {
      if (this.user.length === 0) {
        return (this.view = false);
      } else {
        return (this.view = true);
      }
    }
  },
  mounted: function() {}
};
</script>

 <style lang="scss">
 html,body {
   height: 100vh;
 }
 .height-100 {
   height: 100%;
 }
 .ui.multiple.search.dropdown, .ui.multiple.search.dropdown {
    height: 38px!important;
}
 
//   @import "../public/scss/variable";
//   #app {
//     min-height: 100vh;
//     display:flex;
//     flex-direction:column;

//     .btn {

//       &:focus, &:hover {
//         outline: none;
//       }
//     }
//     #nav {

//       display: flex;
//       justify-content: space-around;
//       padding: 1rem;
//       align-items: center;
//       background: $gray400;
//       color: white;

//       a {
//         font-weight: bold;
//         color: white;
//         transition: color .5s;

//         &.router-link-exact-active {
//           color: red;

//         }
//       }
//     }

//     .main{

//       display: flex;
//     }
  
//     .footer{
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 4rem;
//       width: 100%;
//       background: gray;
//       margin-top: auto;

//     }
//   }

//   .main {
//     display: flex;
//   }
//   .routerView {
//   }
//   .footer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 4rem;
//     width: 100%;
//     background: gray;
//     margin-top: auto;
//   }
// }
// .height-100 {
//   height: 100%;
// }

// // classes to scroll style
// .scroll-style::-webkit-scrollbar
// {
//   width: 3px;  /* for vertical scrollbars */
//   height: 12px; /* for horizontal scrollbars */
// }

// .scroll-style::-webkit-scrollbar-track
// {
//   background: rgba(0, 0, 0, 0.1);
// }

// .scroll-style::-webkit-scrollbar-thumb
// {
//   background: rgba(0, 0, 0, 0.5);
//   border-radius: 2px;
// }
// // default style to scroll
::-webkit-scrollbar
{
  width: 8px;  /* for vertical scrollbars */
  height: 8px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb
{
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
</style>
