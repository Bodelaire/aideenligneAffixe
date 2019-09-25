<template>
  <div>
<p style="text-align: left"> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Aide en ligne /<strong>Categorie</strong> </p>
<div class="container has-background-white " style="text-align: justify">
   <div class="content"  >
  
    <p><strong>   {{article.titre}} </strong ></p>
    </br>
    </br>
    <p style="text-align: justify" v-html="article.content">   </p>
    </div>
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

