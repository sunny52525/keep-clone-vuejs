<template>

  <v-toolbar
      extended
      extension-height="0"
     class="v-system-bar--fixed"
      color="#202124"
  >
    <v-app-bar-nav-icon
        @click="expand"
    ></v-app-bar-nav-icon>
    <img src="https://img.icons8.com/color/40/000000/google-keep.png"/>
    <v-toolbar-title>
      Keep
    </v-toolbar-title>
    <div class="search-bar"
         :style={backgroundColor:searchBarColor}
         @click="changeSearchBarColor('white')"
          :class="{'search-bar-temp':searchIconActive,'width-full':!searchIconActive}"
         v-click-outside="changeSearchBarColorToGray"
        >
      <v-icon
        class="search-icon"
       :color=searchIconColor
      >mdi-magnify</v-icon>
      <input class="search rounded-lg"
             autofocus
             :class="{greyColor:isActive}"
             type="text" placeholder="Search">
    </div>

<div
style="position: fixed;
right: 0;
"

>
    <v-btn icon>
      <v-icon v-if="showSearch"
              
      >
        mdi-magnify
      </v-icon>
    </v-btn>
    <v-btn icon>
    <div class="changeLayout side-button"
    @click="changeLayout"
    ></div>
    </v-btn>

    <v-btn icon>
     <div class="setting-icon side-button opacity"></div>
    </v-btn>

    <v-btn icon>
      <div class="profile-icon side-button" style="opacity: 0.87"></div>
    </v-btn>
</div>

  </v-toolbar>

</template>

<script>
import {eventBus} from "@/main";

export default {
  data() {
    return {
      searchBarColor:"#525355",
      isActive:false,
      searchIconColor:"white",
      showSearch:false,
      searchIconActive:true
    }
  },
  methods: {
    expand() {
      eventBus.$emit("clicked");
    },
    collapse() {
      eventBus.$emit("collapse");
    },
    changeLayout(){
      eventBus.$emit('changeLayout');
    },
    changeSearchBarColor(color){
      this.isActive=true;
      this.searchBarColor=color;
      this.searchIconColor="black"
    },
    changeSearchBarColorToGray(){
      this.searchBarColor="#525355"
      this.isActive=false;
      this.searchIconColor="white"
    },
  changeIconState(){
      // alert(this.searchIconActive)
    this.searchIconActive=!this.searchIconActive
  },
    onResize(){
        this.showSearch = window.innerWidth <= 800;
        if(window.innerWidth>=800)
          this.searchIconActive=true
    //    remove search-bar-temp and add width-full
    },
    showSearchBar(){
    this.showSearch=!this.showSearch;
    }


  },created() {
    this.onResize()
    window.addEventListener('resize',this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.onResize)
  }

}
</script>
<style>
.search {
  height: 100%;
  width: 600px;
  margin-left: 20px;
  z-index: 99;
  margin-bottom: 10px !important;

}

.search-bar {
  padding: 5px 10px 5px;
  height: 80%;
  z-index: 99;
  display: flex;
  margin-bottom: 15px !important;
  margin-left: 100px !important;
  border-radius: 8px !important;
  background-color: #525355;
}
.search-icon{
  margin-top: 5px;
}
.width-full{
  width: 100% !important;
}
::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}
.greyColor::-webkit-input-placeholder {
  color: black;
}
*:focus {
  outline: none;
}

.setting-icon{
  width: 24px;
  height: 24px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmZmZmIj4KICA8cGF0aCBkPSJNMTMuODUgMjIuMjVoLTMuN2MtLjc0IDAtMS4zNi0uNTQtMS40NS0xLjI3bC0uMjctMS44OWMtLjI3LS4xNC0uNTMtLjI5LS43OS0uNDZsLTEuOC43MmMtLjcuMjYtMS40Ny0uMDMtMS44MS0uNjVMMi4yIDE1LjUzYy0uMzUtLjY2LS4yLTEuNDQuMzYtMS44OGwxLjUzLTEuMTljLS4wMS0uMTUtLjAyLS4zLS4wMi0uNDYgMC0uMTUuMDEtLjMxLjAyLS40NmwtMS41Mi0xLjE5Yy0uNTktLjQ1LS43NC0xLjI2LS4zNy0xLjg4bDEuODUtMy4xOWMuMzQtLjYyIDEuMTEtLjkgMS43OS0uNjNsMS44MS43M2MuMjYtLjE3LjUyLS4zMi43OC0uNDZsLjI3LTEuOTFjLjA5LS43LjcxLTEuMjUgMS40NC0xLjI1aDMuN2MuNzQgMCAxLjM2LjU0IDEuNDUgMS4yN2wuMjcgMS44OWMuMjcuMTQuNTMuMjkuNzkuNDZsMS44LS43MmMuNzEtLjI2IDEuNDguMDMgMS44Mi42NWwxLjg0IDMuMThjLjM2LjY2LjIgMS40NC0uMzYgMS44OGwtMS41MiAxLjE5Yy4wMS4xNS4wMi4zLjAyLjQ2cy0uMDEuMzEtLjAyLjQ2bDEuNTIgMS4xOWMuNTYuNDUuNzIgMS4yMy4zNyAxLjg2bC0xLjg2IDMuMjJjLS4zNC42Mi0xLjExLjktMS44LjYzbC0xLjgtLjcyYy0uMjYuMTctLjUyLjMyLS43OC40NmwtLjI3IDEuOTFjLS4xLjY4LS43MiAxLjIyLTEuNDYgMS4yMnptLTMuMjMtMmgyLjc2bC4zNy0yLjU1LjUzLS4yMmMuNDQtLjE4Ljg4LS40NCAxLjM0LS43OGwuNDUtLjM0IDIuMzguOTYgMS4zOC0yLjQtMi4wMy0xLjU4LjA3LS41NmMuMDMtLjI2LjA2LS41MS4wNi0uNzhzLS4wMy0uNTMtLjA2LS43OGwtLjA3LS41NiAyLjAzLTEuNTgtMS4zOS0yLjQtMi4zOS45Ni0uNDUtLjM1Yy0uNDItLjMyLS44Ny0uNTgtMS4zMy0uNzdsLS41Mi0uMjItLjM3LTIuNTVoLTIuNzZsLS4zNyAyLjU1LS41My4yMWMtLjQ0LjE5LS44OC40NC0xLjM0Ljc5bC0uNDUuMzMtMi4zOC0uOTUtMS4zOSAyLjM5IDIuMDMgMS41OC0uMDcuNTZhNyA3IDAgMCAwLS4wNi43OWMwIC4yNi4wMi41My4wNi43OGwuMDcuNTYtMi4wMyAxLjU4IDEuMzggMi40IDIuMzktLjk2LjQ1LjM1Yy40My4zMy44Ni41OCAxLjMzLjc3bC41My4yMi4zOCAyLjU1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuNSIvPgo8L3N2Zz4K);
}
.profile-icon{
  width: 24px;
  background-size: cover;
  height: 24px;
  background-image: url(https://lh3.googleusercontent.com/ogw/ADGmqu9BCv2cP8u9v3S8vfcI3vRX7MB6qkBk5XIX97Ib=s32-c-mo);
  border-radius: 50%;
}
.changeLayout{
  width: 24px;
  height: 24px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K);
}
.opacity{
  opacity: 0.87 !important;
}
.side-button{
  float: right !important;
}

@media (max-width: 1200px) {
  .search{
    width: 400px !important;
  }
}

@media (max-width: 1200px) {
  .search{
    width: 350px !important;
  }
}
@media (max-width: 800px) {
  .search-bar-temp{
    width: 0 !important;
   visibility: hidden !important;
  }

}

</style>