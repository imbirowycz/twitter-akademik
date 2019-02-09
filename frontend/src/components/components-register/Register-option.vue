<template>
  <div class="home">

    <div class="home-info">

      <div class="home-info__logo"></div>
      <router-link to="/register-teacher">
        <div class="hello-eg">
          <h1 class="bolster">Teacher</h1>
          <i class="material-icons">business_center</i>
        </div>
      </router-link>


    </div>
    <div class="home-option" >

      <router-link to="/register-student">
        <div class="hello-eg">
          <h1 class="bolster">Student</h1>
          <i class="material-icons">school</i>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Register-option"
  }
</script>

<style scoped lang="scss">

  @import "../../../public/scss/variable";
  .bolster {
    position: absolute;
    display: inline-block;
    top: -4rem;
    left: 0;
    color: white;
    font-size: 3rem;
    font-family: 'Permanent Marker', cursive;
    transition: color .2s;
  }
  .hello-eg{
    position: relative;
    background: white;
    padding: 3rem;
    border-radius: 50%;
    transition: background-color .2s;

  }
  .material-icons {
    transition: color .2s;
    font-size: 5rem;
  }

  .home-info{

    .hello-eg{
      flex-direction: column;

      .material-icons {color: $pink400;}

      &:hover {

        background: $pink400;
        cursor: pointer;

        .bolster {
          color: $pink400;
        }
        .material-icons {
          color: #d9f4d7;
        }

      }

    }

  }

  .home-option{
    flex-direction: column;

    .material-icons {color: #d9f4d7;}

    .hello-eg{

      &:hover {

        background: #d9f4d7;
        cursor: pointer;

        .bolster {
          color: #d9f4d7;
        }
        .material-icons {color: #ff99b3;}
      }

    }

  }


</style>