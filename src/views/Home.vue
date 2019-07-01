<template>
  <div class="home">
    <create-ideas></create-ideas>
    <all-ideas></all-ideas>  
  </div>
</template>

<script>
// @ is an alias to /src
import AllIdeas from '../components/AllIdeas.vue'
import CreateIdeas from '../components/CreateIdeas.vue'
import store from '@/store.js'
export default {
  name: 'Home',
  store,
  computed: {
    
    
  },
  components: {
    AllIdeas,
    CreateIdeas
  }
  
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

