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
          <b-collapse :open="true"  aria-id="contentIdForA11y1">
            <article  class="media espace espacemargin" slot="trigger" aria-controls="contentIdForA11y1">
                <figure class="media-left">
                    <p class="image is-64x64" >
                      <img src="../../images/iconcall.png" alt="">
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
                        </router-link>
                        </div>
              </div>
               </b-collapse>
         </div>
      </section>
       </div>
    </div>
</template>

<script>
import { db } from "../../firebase.js";

export default {
  name: 'categorieSel',
  data() {
    return {
      clique: false,
      articles: [],
      categories: {}
    }
  },
  methods: {
   articlesCat(id) {
      return this.articles.filter(art => art.idCat === id);
    },
    getAct () {
      db.ref('Article').on('value', (snap) => {
        if (snap.val()) {
          this.articles = Object.values(snap.val())
        } else {
          this.articles = []
        }
      })
    },
    getCat () {
      
        db.ref('Categorie/' + this.$route.params.id).once('value', (snap) => {
          if (snap.val()) {
            this.categories = snap.val()
           
            
          } else {
            
            this.categories = {}
          }
        })
      }
  },
  mounted () {
    this.getCat()
    this.getAct()
  },
  destroyed () {
    db.ref('Categorie').off()
    db.ref('Article').off()
  }
}
</script>

<style>
</style>