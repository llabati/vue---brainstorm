<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="navbar navbar-light justify-content-center">
      <router-link class="navbar-brand" to="/">Accueil</router-link> 
      
      <!--<button class="btn nav-item dropdown" @click="clicked= true">Participants</button> -->
        
        <ul>
          <li v-for="user in users" :key="user.id"><button class="btn btn-outline" @click="toListUser">{{ user }}</button></li>
        </ul>
      

        <!--to="/ideas/:user"  -->

    </div>
    <h1 class="display-2 text-center text-info">{{ welcome }}</h1>
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'app',
  data(){
    return {
      welcome: 'Toutes les idées sont les bienvenues !',
      clicked: false
    }
  },
  computed: {
    users(){
      return this.$store.state.users
    }
  },
  methods: {
    toListUser(event){
      let wantedUser = event.target.textContent
      //let searchedUser = event.target.innerHTML
      //console.log(searchedUser)
      return this.$router.push('/ideas/'+ wantedUser)
    }
  },
  components: {
    Home
  }
  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav ul {
  display: 'inline';
}
#nav ul li {
  display: 'inline';
  
  list-style-type: none;
  border: solid 1px gray;
  border-radius: 2%;
  margin: 1%;
  padding: 2%;
}
</style>
