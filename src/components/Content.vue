<template>
<div class="keeps container">

  <v-row class="row grid">
      <div class="col-lg-2 col-md-4 col-sm-12 each-keep" v-for="(keep,index) in keepDataMain" :key="index">
    <h1>
      {{keep.title}}
    </h1>
        <p>{{keep.content}}</p>
    </div>

  </v-row>
</div>
</template>

<script>

export default {
name: "Content",
  data(){
    return{
      keepDataMain:[{title:'title',content:'content'},{title:'title',content:'coasdjahsdhajsakdkjjjjjjjjjjjcoasdjahsdhajsakdkjjjjjjjjjjjjcoasdjahsdhajsakdkjjjjjjjjjjjjjntent'},{title:'title',content:'content'},{title:'title',content:'content'},{title:'title',content:'content'},{title:'title',content:'content'},{title:'title',content:'content'},{title:'title',content:'content'}]

    }
  },
  components:{

  }

}
</script>

<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");

.each-keep{
  border-radius: 8px !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302);
  border: 1px solid #5f6368;
  margin-left: 10px;
  margin-top: 10px;
  height: fit-content;
  /*width: 100px;*/
  /*margin-right: 10px !important;*/

}
</style>