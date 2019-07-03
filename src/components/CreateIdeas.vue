<template>
    <div id="create" class="row">
        <form @submit.prevent="create" class="col-8 offset-2">
        <div class="form-group">
            <label for="idea-title" class="lead float-left">{{ headline }}<br></label>
            <input type="text" class="form-control my-2" id="idea-title" v-model="title" placeholder="Votre nouvelle idée...">
            <input type="text" class="form-control my-2" id="idea-body" v-model="body" placeholder="Décrivez votre idée...">
            <button type="submit" class="btn btn-success my-3 float-right">Nouvelle idée !</button>
        </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import store from '../store'
export default {
    props: {
        sbody: Boolean
    },
    data(){
        return {
            title: '',
            body: '',
            headline: 'Le titre de votre idée'
        }
    },
    computed: {
        user(){
            return this.$store.state.currentUser
        }
    },
    store,
    methods: {
        create(){
            //this.authorize()
            const idea = {
                createdAt: new Date().toLocaleString(),
                title: this.title,
                body: this.body,
                user: this.user,
                id: Math.floor(Math.random()*1000)
            }
            this.$store.dispatch('createIdea', idea)
            this.title = ''
        },
        authorize(){
            if (!userName) $router.push('/account')
        }
    }
}
</script>