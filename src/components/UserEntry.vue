<template>
    <div>
        <div v-if="!clicked" class="container col-6 offset-3 bg-info text-white text-center align-items-center py-5 my-5">
            <h2 class="display-5">{{ headlineAccount }}</h2>
            <form @submit.prevent="manageUser" class="col-8 offset-2">
                <div class="form-group">
                    <input type="text" class="form-control my-1" id="user-first" v-model="userFirst" placeholder="Votre prénom...">
                    <input type="text" class="form-control my-1" id="user-last" v-model="userLast" placeholder="Votre nom...">
                    <button type="submit" class="btn btn-outline my-3 float-right text-success">Entrez !</button>
                </div>
            </form>
        </div>
        <div v-else>
            <p class="lead">Vous n'êtes pas {{ userFirst }} ? <button class="btn btn-outline text-success" @click="changeClicked">Identifiez-vous ici</button></p>
        </div>
    </div>
</template>

<script>
import store from '../store'
export default {
    data(){
        return {
            headlineAccount: 'Une idée à déposer ? Inscrivez-vous ou connectez-vous',
            userFirst:'',
            userLast: '',
            newUser: true,
            clicked: false
        }
    },
    props: {
        sbody: Boolean
    },
    store,
    methods: {
        manageUser(){
            let userName = `${this.userFirst} ${this.userLast}` 
            if (this.$store.state.users.includes(userName)) this.newUser = false
            else {
                this.$store.commit('addUser', userName) 
                this.newUser = true
            }
            this.$store.commit('updateCurrentUser', this.userFirst)
            this.$emit('connected', this.userName)
            this.clicked = true
        },
        changeClicked(){
            this.clicked = false
        }
    }
    
}
</script>

