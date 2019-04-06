<template>
    <div>
        <h3>Hello from Home!</h3>
        <div v-if="userGet">
            <ul>
                <li>{{userGet.firstName}}</li>
                <li>{{userGet.lastName}}</li>
                <li>{{userGet.email}}</li>
                <li>{{userGet.numberAl}}</li>
                <li>{{userGet.fieldOfStudy}}</li>
                <li>{{userGet.degree}}</li>
                <li>{{userGet.mode}}</li>
                <li>{{userGet.year}}</li>

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