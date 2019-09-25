<template>
  <div>

<p> {{ this.articles.content}} </p>

  

  </div>
</template>

<script>
import { db } from "../../firebase.js";
import Router from 'vue-router'
import {articleRef } from '../../firebase.js';


export default {
  data() {
     return {
       valeur: "",
      articles: [],
       nameArticle: {},
       username: ""
    }
  },
  firebase: {
    nameArticle: articleRef
  },
  methods: {
  getAct (id) {

     this.articles =db.ref('Article').once(id).then(function(snapshot) {
     this.username = (snapshot.val() && snapshot.val().username)
    
    })
  }
  ,
  mounted () {
    alert(this.articles)
    this.getAct(this.$route.params.id)
    
  }
  }
}
</script>

<style>
</style>

