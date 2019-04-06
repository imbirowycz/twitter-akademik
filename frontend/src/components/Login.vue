<template>
  <div class="login">
    <div class="login-form">
      <h1 class="login-form__header">Logowanie</h1>
      <form @submit.prevent="submit()">
        <div class="message-error">
          <span v-if="$v.email.$error" class="valid-error">Nie poprawny email!</span>
        </div>
        <input type="text"
               placeholder="Enter email"
               id="emial-form"
               v-model="email"
               :class="{error: $v.email.$error}"
               @change="$v.email.$touch()"
        >
        <div class="message-error">
          <span v-if="$v.password.$error" class="valid-error">Hasło jest za krótkie!</span>
        </div>
        <input type="password"
               placeholder="Enter password"
               id="password-form"
               v-model="password"
               :class="{error: $v.password.$error}"
               @change="$v.password.$touch()"
        >
        <input type="submit"
               :disabled="this.$v.$invalid"
               value="Sign In"
               :class="{btnDisabled: this.$v.$invalid}"
        >
        <button  type="button" @click="linkRegister()" class="btn">Załóż konto</button>
        <router-link to="#">Nie pamiętasz hasła?</router-link>
      </form>
    </div>

  </div>
</template>

<script>
  //import {mapActions} from 'vuex'
  import { required, minLength, email } from 'vuelidate/lib/validators'

  export default {
    name: 'hello',

    data() {
      return {
        email: '',
        password: '',
        submitStatus: null
      }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    methods: {

      submit: function (){
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK';
            console.log('Your email: ',this.email,"\nYour password: ",this.password);
          }, 500)
        }
      },
      linkRegister() {
        this.$router.push("/register-option")
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "../../public/scss/variable";

  .login{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form{
      width: 60%;
      background: white;
      padding: 1rem 3rem 3rem 3rem;
      box-sizing: border-box;
      border-radius: .5rem;
      box-shadow: 0px 0px 31px -12px rgba(0,0,0,0.75);

      .login-form__header {
        text-align: center;
        font-family: 'Permanent Marker', cursive;
        color: $green300;
        font-size: 2rem;
      }

      .btnDisabled {
        &:hover {
          cursor: not-allowed;
        }
      }

      input{
        width: 100%;
        margin-bottom: .2rem;
        display: block;
        padding: .4rem;
        border-radius: .5rem;
        border: solid .09rem $blue400;

        &::placeholder{
          font-size: .8rem;
        }

        &:focus{
          outline: none;
          box-shadow: inset 0px 0px 50px -22px rgba(0,0,0,0.45);

        }
      }

      input[type=submit]{
        margin-top: 1.5rem;
        padding: .5rem;
        background: $blue400;
        color: white;
        /*font-weight: 600;*/
        transition: background-color .2s, color .2s;
        border: solid .09rem $blue400;
        cursor: pointer;
        margin-bottom: .5rem;


        &:hover{
          background: $hover_blue;
          color: white;

        }
        &:active {
          background: white;
          color: $hover_blue;
        }
      }
      button {
        box-sizing: border-box;
        background-color: white;
        color: $blue400;
        border: solid .09rem $blue400;
        margin-bottom: .5rem;

        &:hover {
          background: $hover_blue;
          color: white;
        }

      }

    }
    @media (max-width: 720px){
      & {
        .login-form {
          width: 100%;
          height: 100%;
        }

      }
    }

  }


</style>