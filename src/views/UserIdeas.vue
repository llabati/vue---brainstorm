<template>
    <div>
        <h2>Les idées de {{ user }}</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in userIdeas" :key="item.id">
                <p class="bg-secondary text-white">{{ item.createdAt }}</p>
                <h3 class="lead">{{ item.title }}</h3> 
                <p>{{ item.body }}</p>
                <p><strong class="float-right text-success">{{ item.user }}</strong></p>
            </li>
        </ul>
    </div>
</template>

<script>
import SingleIdea from '../components/SingleIdea'
export default {
    computed: {
        user(){
            return this.$route.params.user
        },
        userFirst(user){
            let pre = this.user.split('').indexOf(' ')
            console.log(pre)
            return this.user.substr(0, pre)

        },
        userIdeas(userFirst){
            let listedIdeas = this.$store.state.ideas.filter(idea => idea.user === this.userFirst)
            let listedNow = this.$store.state.now.filter(idea => idea.user === this.userFirst)
            let listedLater = this.$store.state.later.filter(idea => idea.user === this.userFirst)
            console.log(listedIdeas)
            return listedIdeas.concat(listedNow).concat(listedLater)
        }
    },
    components: {
        SingleIdea
    }
}
/* */
</script>




