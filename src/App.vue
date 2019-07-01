<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="nav justify-content-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
      welcome: 'Toutes les idées sont les bienvenues !'
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
</style>
