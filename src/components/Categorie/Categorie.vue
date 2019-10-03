<template>
  <div>
 <div class=" conteneur ">
      <section class="section2 width-70 " v-for="(item, index) in categories" :key="index">
        <div class="container has-background-white">
        <b-collapse :open="false"  aria-id="contentIdForA11y1">
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
        </b-collapse>
         </div>
      </section>
       </div>
    </div>
</template>

<script>



export default {
  name: 'HelloWorld',
  data() {
    return {
      clique: false,
      articles: {},
      categories: []
    }
  },
  methods: {
   articlesCat(id) {
    
      return this.articles.filter(art => art.idCat === id);
    }
    },
  mounted () {
     this.categories=this.$parent.categories
     this.articles=this.$parent.articles 
      
  }

}
</script>

<style>
</style>