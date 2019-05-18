<template>
  <div class="home">

    <div class="home-info">

      <div class="home-info__logo"></div>

      <div class="home-info__content">
        <h1 class="hello-info__content--name">Twitter _ academic</h1>

        <ul>
          <li class="hello-info__content--description">🧐 Obserwuj co się dzieje na uczelni
          </li>
          <li class="hello-info__content--description">Komunikuj się ze znajomymi 😜</li>
          <li class="hello-info__content--description">Zadawaj pytania <i class="material-icons">
            help
          </i></li>
          <li class="hello-info__content--description">
            Bądź na bieżąco ...
            <i class="material-icons">autorenew</i>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-option">
      <login></login>
    </div>

  </div>
</template>

<script>
  import login from './login/Login'

  export default {
    name: 'home',
    components: {
      login
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  @import "../../public/scss/variable";

  @keyframes rotations {
    0% , 30%, 100%{transform: rotate(0deg);}
    10% {transform: rotate(-15deg);}
    20% {transform: rotate(15deg);}
  }
  @keyframes rotations360 {
    0% , 30%, 100%{transform: rotate(0deg);}
    10% {transform: rotate(-360deg);}
    20% {transform: rotate(360deg);}
  }


  .message-error{
    height: 1rem;
    display: flex;
    align-items: center;
  }

  .home {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 100vh;
    position: relative;

    .home-info {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $green-transparent;
      width: 50%;
      margin-right: .3rem;

      .home-info__logo {
        position: absolute;
        width: 8rem;
        height: 8rem;
        top: 5%;
        left: calc(50% - 4rem);
        border-radius: 50%;
        display: block;
        background: white url("../assets/sggw.png") center;
        background-size: 120% 120%;
        animation: rotations 3.4s infinite linear;
        overflow: hidden;

        &:hover {
          animation: rotations360 1s infinite linear;
        }

      }
      .home-info__content {

        ul > li{
          align-items: center;
          display: flex;

          &::before {
            display: inline-block;
            padding: .2rem;
            content: '●';
            color: $pink400;
            width: 1em;
            margin-left: -1em;
          }
        }
        .hello-info__content--name {
          font-size: 2.5rem;
          font-family: 'Permanent Marker', cursive;
          font-weight: 600;
          color: $pink400;
          margin-bottom: .7rem;

        }
        .hello-info__content--description {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: .7rem;
          font-family: 'Mali', cursive;
        }
      }
    }

    /* *********   Login ******************* */

    .home-option {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $pink-transparent-2;
      width: 50%;
      margin-left: .3rem;

    }
    @media (max-width: 920px){
      & {
        display: block;


        .home-info {
          width: 100%;
          height: 100vh;
          padding: 2rem 0;


          .home-info__logo {
            display: none;
          }
          .home-info__content {

          }
        }
        .home-option {
          height: 100vh;
          width: 100%;
          margin: 0;
        }
      }
    }
  }


</style>
