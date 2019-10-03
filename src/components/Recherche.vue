<template>
  <div>
 <div  class=" conteneur ">
   

      <section class="section3 width-70 ">
        <div class="container">
         <p> Resultats de la recherche  <strong>{{ this.$parent.motrecherche }}</strong>  </p>
          
         </div>
      </section>
       
 <section class="section3 width-70 ">
        <div class="container">
         <p> <strong>{{categorieRecherche(this.$parent.motrecherche).length}} categories trouvés</strong></p>
          
         </div>
      </section>

      <section class="section2 width-70 "  v-for="(item, index) in categorieRecherche(this.$parent.motrecherche)" :key="index">
        <div class="container has-background-white">
            <article  class="media espace espacemargin" slot="trigger" aria-controls="contentIdForA11y1">
                <figure class="media-left">
                    <p class="image is-64x64" >
                      <img :src="item.image" alt="">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="container has-background-white ">
                      <p>
                         <router-link :to="{ name: 'categorieSel', params: { id: item.id }}">
                             <strong>{{item.name}}</strong>
                        </router-link>
                          <br>
                          {{articlesCat(item.id).length}} articles dans cette catégorie
                      </p>
            </div>
    </div>
            </article>
         </div>
      </section>
       </div>
    
     <div  class=" conteneur ">
       <section class="section3 width-70 ">
        <div class="container">
         <p> {{articlesRecherche(this.$parent.motrecherche).length}} articles trouvés</p>
           
          
         </div>
      </section>
      <section class="section2 width-70 "  v-for="(item, index) in articlesRecherche(this.$parent.motrecherche)" :key="index">
        <div class="container has-background-white">
            <article  class="media espace espacemargin" slot="trigger" aria-controls="contentIdForA11y1">
                <div class="media-content">
                    <div class="container has-background-white ">
                      <p>
                         <router-link :to="{ name: 'article', params: { id: item.id }}">
                             <strong>{{item.titre}}</strong>
                        </router-link>
                          <br>
                          Mise à jour il y a  {{getDate(art.dateCreation)}}
                      </p>
            </div>
    </div>
            </article>
         </div>
      </section>
       </div>
    </div>
</template>

<script>

import {categorieRef } from '../firebase.js';
import {articleRef } from '../firebase.js';
import moment from 'moment'

export default {
  name: 'Hello',
  data() {
    return {
      articles: [],
      categories: [],
      regex: {}
    }
  },
  firebase: {
    categories: categorieRef,
    articles: articleRef
  },
  methods: {
   articlesRecherche() {
    
     
      return this.articles.filter(art => art.titre.match(this.regex) !== null);
    },
     categorieRecherche() {
       this.regex = RegExp( this.$parent.motrecherche , "ig")
      
      
    
      return this.categories.filter(cat => cat.name.match(this.regex) !== null );
    },
     articlesCat(id) {
      return this.articles.filter(art => art.idCat === id);
    },
    getDate(date){
     return moment(date, 'lll').fromNow();
    }
  },
  mounted () {
   
    
  }
}
</script>

<style>
</style>