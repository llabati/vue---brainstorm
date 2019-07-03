<template>
    <div class="col-8 offset-2 my-6 element-idea">
        
            <p class="col-12 top">
                <span class="bg-secondary text-white float-left">{{ idea.createdAt }}</span>
                <strong class="author float-right text-success">{{ idea.user }}</strong>
            </p>
            <div class="my-3">
            <h3 class="display-5 text-center text-info">{{ idea.title }}</h3> 
            <p class="col-8 offset-2 lead text-align-left">{{ idea.body }}</p>
            </div>
        
        <button class="btn btn-info" @click="$router.push('/')">Retour à la liste des idées</button>
    </div>
</template>

<script>
export default {
    computed: {
        title(){
            return this.$route.params.title
        },
        idea(title){
            if (this.$store.state.ideas.find( idea => idea.title === this.title ))
                return this.$store.state.ideas.find( idea => idea.title === this.title)
            else if (this.$store.state.now.find( idea => idea.title === this.title))
                return this.$store.state.now.find( idea => idea.title === this.title )
            else 
                return this.$store.state.later.find( idea => idea.title === this.title )
            
        }  
    }
}  
</script>

<style scoped>
.element-idea {
    border: solid 1px gray;
    border-radius: 3%;
    padding: none;
}
.top {
    height: 25px;
}
.author {
    font-size: 1.4rem;
}
</style>

