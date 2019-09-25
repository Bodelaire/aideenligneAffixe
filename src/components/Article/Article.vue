<template>
  <div>
     <h1>  {{article.titre}} </h1 > 
    </br></br>
    <p v-html="article.content">  </p>

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

