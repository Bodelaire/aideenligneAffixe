<template>
  <div class="container">


            <div class="card">
              <ul>
                  <li v-for="categorie in dataList" v-bind:key="categorie['.key']">
                    <a >{{categorie.name}}</a>
                  </li>
              </ul>

            </div>
    </div>

</template>

<script>
import {categorieRef } from '../../firebase.js';
import {articleRef } from '../../firebase.js';
import {db } from '../../firebase.js';
export default {
  name: 'HelloWorld',
  data() {
    return {
      dataList: []
    }
  },
  firebase: {
    dataList: categorieRef
  },
  mounted: function() {
  categorieRef.on("value", snap => {
   
    });
    
  }
}
</script>