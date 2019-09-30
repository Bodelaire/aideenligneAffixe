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
      <section class="section3 width-70 ">
        <div class="container has-background-white">
          <p><strong>   {{article.titre}} </strong ></p>
         <p style="text-align: justify" v-html="article.content">   </p>
          
         </div>
      </section>
       </div>

    <article class="message">
  <div class="message-body">
   <p class="content" style="text-align: justify"> Ces informations vous ont-elles été utiles?    </p>
   
  </div>
</article>
  </div>
 




  
</template>

<script>
import { db } from "../../firebase.js";


export default {
  data() {
     return {
       valeur: "",
       article: {},
       nameArticle: {}
    }
  },
  methods: {
  getAct() {
        db.ref('Article/' + this.$route.params.id).once('value', (snap) => {
          if (snap.val()) {
            this.article = snap.val()
          } else {
            this.article = {}
          }
        })
      }
  }
  ,
  mounted () {
    
    this.getAct();
    
  }
}
</script>

<style>
</style>

