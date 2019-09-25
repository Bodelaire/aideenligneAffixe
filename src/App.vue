<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="./images/image001.jpg" width="112" height="28">
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Ajoutbout></Ajoutbout>
            </div>
          </div>
        </div>
      </div>
    </nav>
   <div class="h-100 conteneur">
      <section class="section">
        <div class="container">
            <h1 class="title is-4" style="color: white">Comment pouvons-nous vous aider ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <span class="icon is-small is-left">
                    <i class="fas fa-external-link-alt"></i>
               </span>&nbsp; Aller sur Affixe2.0
            </h1>
           <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="search" placeholder="Rechercher des réponses...">
                    <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                    </span>
                </p>
            </div> 
         </div>
      </section>
    </div>
    <router-view> </router-view>
    
  </div>
</template>

<script>
import Ajoutbout from './components/Ajoutbout.vue'
export default {
   name: 'app',
  components: {
    Ajoutbout
  },
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
html {
  height: 100%;
  background-color: #f2f7f9 !important;
}
.conteneur {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #388fec;
  margin-bottom: 20px;
}
.espace {
  padding: 20px;
}
.espacemargin {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
