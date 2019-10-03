<template>
  <div>
 
 <div class=" conteneur ">
      <section class="section3 width-70 ">
        <div class="container">
          <router-link :to="{ name: 'categorie'}">
                 <p style="text-align: left"> Aide en ligne /<strong>Categorie</strong> </p>
           </router-link>
          
         </div>
      </section>
       </div>
 <div class=" conteneur ">
      <section class="section2 width-70 ">
        <div class="container has-background-white">
         
            <article  class="media espace espacemargin" slot="trigger" aria-controls="contentIdForA11y1">
                <figure class="media-left">
                    <p class="image is-64x64" >
                      <img :src="categories.image" alt="">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="container has-background-white ">
                      <p>
                          <strong>{{categories.name}}</strong>
                          <br>
                          {{articlesCat(categories.id).length}} articles dans cette catégorie
                      </p>
            </div>
    </div>
            </article>
              <div class="espace">
                        <div class="content espace has-background-light" v-for="(art, y) in articlesCat(categories.id)" :key="y">
                          <router-link :to="{ name: 'article', params: { id: art.id }}">
                            <strong>{{art.titre}}</strong>
                            <br>
                             Mise à jour il y a  {{getDate(art.dateCreation)}}
                        </router-link>
                        </div>
              </div>
               
         </div>
      </section>
       </div>
    </div>
</template>

<script>

import {categorieRef } from '../../firebase.js';
import {articleRef } from '../../firebase.js';
import moment from 'moment'



export default {
  name: 'categorieSel',
  data() {
    return {
      clique: false,
      articles: [],
      categories: []
      
    }
  },
   firebase: {
    categories: categorieRef,
    articles: articleRef
  },
  methods: {
   articlesCat(id) {
      return this.articles.filter(art => art.idCat === id);
    },
    getCat () {
      
    this.categories=this.categories.filter(art => art.id == this.$route.params.id);
    this.categories=this.categories[0]
      },
    getDate(date){
     return moment(date, 'lll').fromNow();
    }
  },
  mounted () {
 
    this.getCat()
  }
}
</script>

<style>
</style>