<template>
 <div >
  <b-button type="is-primary" icon-left="plus"  @click="AjoutArticle = true"></b-button>
   <b-modal :active.sync="AjoutArticle" :width="640" scroll="keep">
     <div class="card">
       <b-tabs v-model="activeTab">
        <b-tab-item label="Article">
             <b-field label="Categorie">
                <b-select v-model="nameCategorie.name" placeholder="Selectionner la catégorie">
                  <option
                      v-for="nomDeCategorie in nameCategorie"
                      :value="nomDeCategorie.id"
                      :key="nomDeCategorie.id">
                      {{ nomDeCategorie.name }}
                  </option>
                </b-select>
             </b-field>
            <b-field label="Titre de l'article">
               <b-input v-model="titreArticle"></b-input>
            </b-field>
            <b-field label="Contenue de l'article">
              <vue-editor v-model="content"/>
            </b-field>
            <div class="buttons">
               <b-button type="is-info" @click="submitArticle()">Valider</b-button>
            </div>
        </b-tab-item>

        <b-tab-item label="Categorie">
           <b-field label="Categorie">
             <b-input v-model="nomCat"></b-input>
           </b-field>
           <div class="buttons">
               <b-button @click="submitCategorie()" type="is-primary">Valider</b-button>
             </div>
         </b-tab-item>
      </b-tabs>
     </div>
     
    </b-modal>
</div >
</template>

<script>
import { VueEditor } from "vue2-editor";
import {categorieRef } from '../firebase.js';
import {articleRef } from '../firebase.js';
import {db } from '../firebase.js';
export default {
 data() {
      return {
        AjoutArticle: false,
        activeTab: 0,
        content: "",
        nomCat:"",
        nameCategorie: {},
        titreArticle: ''
      }
  },
  firebase: {
    nameCategorie: categorieRef
  },
  components: {
    VueEditor
  },
  methods: {
     submitCategorie() {
       if(this.nomCat.length)
       {
           
          const id = categorieRef.push({name: this.nomCat}).key;
           categorieRef.child(id).update({id: id}) ; 
           alert(id)   
         this.$buefy.toast.open({
            message: 'Enregistrement de Categorie confirmé',
            type: 'is-success',
            position: 'is-bottom'

           })
           this.nomCat='';
       }
       else
       {
         this.$buefy.toast.open({
            message: 'veuillez renseigner le nom de la categorie',
            type: 'is-danger',
            position: 'is-bottom'

           })
       }
     },
    submitArticle () {
      if (this.titreArticle.length && this.content.length && this.nameCategorie.name) {
        const id = articleRef.push({titre: this.titreArticle,content: this.content,idCat: this.nameCategorie.name}).key;
        articleRef.child(id).update({id: id}) ;
        this.titreArticle = ''
        this.content = ''
        this.$buefy.toast.open({
            message: 'Enregistrement confirmé',
            type: 'is-success',
            position: 'is-bottom'
        })
      } else {
        this.$buefy.toast.open({
            message: ' Données manquantes ',
            type: 'is-danger',
            position: 'is-bottom'
        })
      }
    }
  },
  mounted () {
    
  },
  destroyed () {
   
  }
}
</script>

<style>
</style>
