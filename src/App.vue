<template
>
    <v-app
    >

    <navbar
    class="navbar "></navbar>
      <hr>
    <sidebar
    class="sidebar"
    >
    </sidebar>
    </v-app>

</template>

<script>
import sidebar from "@/components/sidebar";
import navbar from  "@/components/navbar";

export default {
  name: 'App',

  components: {
    sidebar,
    navbar
  },

  data: () => ({

  }),
  created() {
  }
};
</script>
<style>
.v-toolbar{
  flex: 0 !important;
}
body{
  background-color: #202124 !important;
}
hr{
border: none;
  height: 1px;
  color: white; /* old IE */
  background-color: white; /* Modern Browsers */
}
.changeLayout{
  opacity: 0.87 !important;
}
.theme--dark.v-application{

  background-color: #202124 !important;
  color:#202124 !important;;
}
.sidebar{
  margin-top: 64px !important;
  box-shadow: none !important;
}
</style>