<template>
  <div id="app">
    
    <v_login/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import v_login from './components/v_login.vue'
export default {
  name: 'App',
  // store,
  components: {
    v_login
  },
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
