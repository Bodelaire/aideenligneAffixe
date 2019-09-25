<template>
  <div>
 ; <p style="text-align: left"> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Aide en ligne /<strong>Categorie</strong> </p>
      <section class="container has-background-white" v-for="(item, index) in categories" :key="index">
        <b-collapse :open="false" aria-id="contentIdForA11y1">
            <article  class="media espace espacemargin"
                    slot="trigger"
                    aria-controls="contentIdForA11y1">
                <figure class="media-left">
                    <p class="image is-64x64" >
                      <img src="../../images/iconcall.png" alt="">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                      <p>
                          <strong>{{item.name}}</strong>
                          <br>
                          {{articlesCat(item.id).length}} articles dans cette catégorie
                      </p>
            </div>
    </div>
            </article>
              <div class="espace">
                        <div class="content espace has-background-light" v-for="(art, y) in articlesCat(item.id)" :key="y">
                          <router-link :to="{ name: 'article', params: { id: art.id }}">
                            <strong>{{art.titre}}</strong>
                        </router-link>
                        </div>
              </div>
        </b-collapse>
      </section>
    </div>
</template>

<script>
import { db } from "../../firebase.js";

export default {
  name: 'HelloWorld',
  data() {
    return {
      articles: [],
      categories: []
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
       db.ref('Categorie').on('value', (snap) => {
        if (snap.val()) {
          this.categories = Object.values(snap.val())
        } else {
          this.categories = []
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