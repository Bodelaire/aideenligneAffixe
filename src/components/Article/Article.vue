<template>
  <div>
<div class=" conteneur ">
      <section class="section3 width-70 ">
        <div class="container">
          <router-link :to="{ name: 'categorie'}">
                 <p style="text-align: left; color: black"> Aide en ligne /<strong>Categorie</strong> </p>
           </router-link>
          
         </div>
      </section>
       </div>

       <div class=" conteneur ">
      <section class="section3 width-70 ">
        <div class="container has-background-white">
          <p><strong>   {{article.titre}} </strong ></p>

        <section class="section4 ">
        <div class="container">
          <p style="text-align: justify" v-html="article.content">   </p>
          
         </div>
      </section>

        
          
         </div>
      </section>
       </div>

    <article class="message">
  <div class="message-body">
   <p class="content pad1" style="text-align: justify"> Ces informations vous ont-elles été utiles?    </p>
   
  </div>
</article>
  </div>
 




  
</template>

<script>

import {articleRef } from '../../firebase.js';


export default {
  data() {
     return {
       article: []
    }
  },
   firebase: {
    article: articleRef
  },
  methods: {
  getAct() {
     this.article=this.$parent.articles.filter(art => art.id == this.$route.params.id);
    this.article=this.article[0]
      }
  }
  ,
  mounted () {
  
    this.getAct();
    
  }
}
</script>

<style>
.pad1{
padding-top: 0rem;
padding-right: 1.5rem;
padding-bottom: 0rem;
padding-left: 1.5rem;
margin-left: 1rem 
}

</style>

