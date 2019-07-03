<template>
  <div class="home">
    <user-entry @connected="open"></user-entry>
    <create-ideas v-if="sbody" :sbody="sbody" :userName="userName"></create-ideas>
    <all-ideas></all-ideas>  
  </div>
</template>

<script>
// @ is an alias to /src
import AllIdeas from '../components/AllIdeas.vue'
import CreateIdeas from '../components/CreateIdeas.vue'
import UserEntry from '../components/UserEntry.vue'
import store from '@/store.js'
export default {
  name: 'Home',
  store,
  data(){
    return{
      sbody: false,
      userName:''
    }
  },
  computed: {
    
  },
  methods: {
    open(userName){
      this.sbody = true
      this.userName = userName
    }
  },
  mounted(){
    this.sbody = false
  },
  components: {
    AllIdeas,
    CreateIdeas,
    UserEntry
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

