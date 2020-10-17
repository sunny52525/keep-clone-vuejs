<template>
  <div>
    <v-app id="inspire">
      <v-card
          color="#202124"
          style="display: flex"

      >
        <v-navigation-drawer
            v-model="drawer"
            style="  position: fixed;
                display: block;
                z-index: 100;
                margin-top: 64px !important;"
            color="#202124"

            :mini-variant.sync="mini"
            permanent
        >



          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
                v-for="(item,index) in items"
                :key="item.title"
                link
                @mouseover="mini=false"
                @mouseleave="mini=true"
                @click="sidebarClicked(index)"

                class="list-item"
                :class='{yellowBackground:(index==active)}'

            >
              <v-list-item-icon>
                <svg
                    v-if="index==0"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                      d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                </svg>
                <svg
                    v-if="index==1"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                      d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path>
                </svg>
                <svg
                    v-if="index==2"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                  <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
                </svg>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
          <appBody v-if="!trashVisible"
          class="app-body"
          ></appBody>

        <contents
          class="content-body"
          :keep-data-main="main"
          v-if="!trashVisible"

        ></contents>
        <contents
            v-if="trashVisible"
            class="content-body"
            :keep-data-main="trash"

        >

        </contents>


      </v-card>
    </v-app>
  </div>
</template>

<script>

import {eventBus} from "@/main";
import appBody from "@/components/Appbody";
import contents from "@/components/Content";

export default {
  data() {
    return {
      drawer: true,
      active: 0,
      items: [
        {title: 'Notes'},
        {title: 'Trash'},
      ],
      main:[
      ].reverse(),
      trash:[].reverse(),
      mini: true,
      trashVisible:false,
    }
  },
  props:{

  },
  components: {
    appBody,
    contents
  },
  methods: {
    // onResize() {
    //   if (window.innerWidth <= 600) {
    //     console.log(innerWidth)
    //     this.mini = true
    //   } else {
    //     this.mini = false
    //   }
    // }
    sidebarClicked(index){
      this.mini=false;
      this.trashVisible = index === 1;
      this.active=index

    }
  },
  created() {
 // window.addEventListener('resize',this.onResize)
    eventBus.$on("clicked", () => {
      this.mini = !this.mini
    })
    eventBus.$on("collapse", () => {
      this.mini = true
    })
    eventBus.$on("trashed",(data)=>{
      if(this.trashVisible!==true)
      this.trash.push(data)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>
<style>
.v-list-item__content {
  padding-left: 10px !important;
}

svg {
  fill: white;
}

.v-divider {
  border: none !important;
}

.list-item {
  /*background-color: #41331C;*/
}

.yellowBackground {
  background-color: #41331C;

}

.v-card{
  display: grid !important;
}

.v-navigation-drawer {
  height: 100vh !important;
}

@media (max-width: 420px) {
  .app-body{
    margin-right: 10px !important;
  }
  .content-body{
    margin-right: 10px !important;

  }
}
@media (max-width: 1000px) {

  .content-body{
    margin-right: 10px !important;

  }
}
</style>