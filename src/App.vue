<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
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
  <div class="h-100 conteneur backColor-blue">
      <section class="padding-top-bottom-3 section width-70 ">
        <div class="container">
             <!-- Main container -->
          <nav class="level">
            <!-- Left side -->
            <div class="level-left">
              <div class="level-item">
                <p class="subtitle is-10 has-text-white">
                  Comment pouvons-nous vous aider ?
                </p>
              </div>
              <div class="level-item"></div>
            </div>

            <!-- Right side -->
            <div class="level-right">
              <p class="level-item has-text-white"><i class="fas fa-external-link-alt"></i></p>
              <p class="level-item has-text-white">Aller sur Affixe2.0</p>
            </div>
          </nav>
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
    <router-view></router-view>
  </div>
</template>

<script>
import Ajoutbout from './components/Ajoutbout.vue'
export default {
   name: 'app',
  components: {
    Ajoutbout
  },
 data() {
     return {
      essai: true
    }
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
html {
  height: 100%;
  background-color: #f2f7f9 !important;
}
.conteneur {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}
.espace {
  padding: 20px;
}
.espacemargin {
  margin-bottom: 10px;
  margin-top: 10px;
}
.width-70 {
 width: 70%
}
.backColor-blue {
background-color: #388fec;
}
.backColor-white {
background-color: #ffffff;
}
.section2{
padding-top: 0rem;
padding-right: 1.5rem;
padding-bottom: 0.3rem;
padding-left: 1.5rem;
}
.section3{
padding-top: 0rem;
padding-right: 1.5rem;
padding-bottom: 0rem;
padding-left: 1.5rem;
}
</style>
