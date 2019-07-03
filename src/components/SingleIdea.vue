<template>
    <div class="my-2" style="cursor: pointer" @click="displayIdea">
        <p class="bg-secondary text-white">{{ item.createdAt }}</p>
        <h3 class="lead">{{ item.title }}</h3> 
        <p><strong class="float-right text-success">{{ item.user }}</strong></p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        displayIdea(item){
            this.$router.push({ name: "idea", params: { title: this.item.title }})
        }
    }
}
</script>

<style scoped>
.idea {
    padding: 3%;
    border-radius: 3%;
}
</style>
