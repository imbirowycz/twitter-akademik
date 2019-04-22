<template>
    <div>
        <h3>Hello from Home!</h3>
        <div v-if="userGet">
            <ul v-for="(value, key, index) in userGet" :key="index">
                <li>{{key}}: {{value}}</li>
               

            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
    export default {
        name: "Home",
        computed: {
            // ...mapState({
            //     user: state => state.user != null ? state.user : 'undefinited'
            // }),
            ...mapGetters('user',['userGet']),
         
        }
    }
</script>

<style scoped>

</style>