<template>
    <div id="all">
        <h2 class="my-3 text-success">La liste de nos idées</h2>
        <div class="row">
            <div v-if="ideas.length > 0" class="col-4">
                <h3 class="my-3">Maintenant</h3>
                <ul class="list-group">
                <draggable v-model="now" group="ideas">
                    <single-idea :item="point" v-for="point in now" :key="point.id" class="list-group-item"></single-idea>
                </draggable>
                </ul>
            </div>
            <div v-else class="col-6">
                <h3 class="my-3">Maintenant</h3>
                <ul class="list-group">
                <draggable v-model="now" group="ideas">
                    <single-idea :item="point" v-for="point in now" :key="point.id" class="list-group-item"></single-idea>
                </draggable>
                </ul>
            </div>
            <div v-show="ideas.length > 0" class="col-4" id="main-ideas">
                <h3 class="my-3">Nouvelles idées</h3>
                <ul class="list-group">
                <draggable v-model="ideas" group="ideas">
                    <single-idea :item="idea" v-for="idea in ideas" :key="idea.id" class="list-group-item"></single-idea>
                </draggable>
                </ul>
            </div>
            <div v-if="ideas.length > 0" class="col-4">
                <h3 class="my-3">Plus tard</h3>
                <ul class="list-group">
                <draggable v-model="later" group="ideas">
                    <single-idea :item="note" v-for="note in later" :key="note.id" class="list-group-item"></single-idea>
                </draggable>
                </ul>
            </div>
            <div v-else class="col-6">
                <h3 class="my-3">Plus tard</h3>
                <ul class="list-group">
                <draggable v-model="later" group="ideas">
                    <single-idea :item="note" v-for="note in later" :key="note.id" class="list-group-item"></single-idea>
                </draggable>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import store from '../store'
import draggable from 'vuedraggable'
import SingleIdea from './SingleIdea.vue'
export default {
    store,
    computed: {
        ideas: {
            get(){
                return this.$store.getters.getAllIdeas
            },
            set(value){
                this.$store.dispatch('saveNewOrder', value)
            }
        },
        now: {
            get(){
                return this.$store.getters.getNow
            },
            set(value){
                this.$store.dispatch('setInNow', value)
            }
        },
        later: {
            get(){
                return this.$store.getters.getLater
            },
            set(value){
                this.$store.dispatch('setInLater', value)
            }
        }

    },
    components: {
        draggable,
        SingleIdea
    }
    
    
}
</script>
