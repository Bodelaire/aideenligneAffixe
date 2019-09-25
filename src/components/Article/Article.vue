<template>
  <div>

<p> {{ this.username}} </p>

  

  </div>
</template>

<script>
import { db } from "../../firebase.js";
import Router from 'vue-router'


export default {
  data() {
     return {
       valeur: "",
      articles: [],
       nameArticle: {},
       username: ""
    }
  },
  methods: {
  getAct (id) {
   this.username= db.ref('Article').child(id).content ; 
    alert(id)    
    return this.username;
  }
  ,
  mounted () {
    
    this.getAct(this.$route.params.id)
    
  }
  }
}
</script>

<style>
</style>

