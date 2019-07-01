<template>
    <div id="create" class="row">
        <form @submit.prevent="create" class="col-8 offset-2">
        <div class="form-group">
            <label for="idea-title" class="lead float-left">{{ headline }}<br></label>
            <input type="text" class="form-control" id="idea-title" v-model="title" placeholder="Votre nouvelle idée...">
            <button type="submit" class="btn btn-success my-3 float-right">Nouvelle idée !</button>
        </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import store from '../store'
export default {
    data(){
        return {
            title: '',
            headline: 'Le titre de l\'idée'
        }
    },
    store,
    methods: {
        create(){
            const idea = {
                createdAt: new Date().toLocaleString(),
                title: this.title
            }
            this.$store.dispatch('createIdea', idea)
            this.title = ''
        }
    }
}
</script>