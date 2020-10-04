<template>
  <div class="editor">
    <div class="newNote"
         v-if="!inEditingMode"
         style="display: flex"
         @click="inEditingMode=!inEditingMode"
    >
      <div contenteditable="true" aria-multiline="true" role="textbox"
          style="padding-top: 10px;
          padding-left: 20px;"
           spellcheck="false">
        <div class="placeholder">Take a note…</div>
      </div>
    </div>
    <div class="noteEdit"
         v-if="inEditingMode"
         v-click-outside="toggle"

    >
    <div class="title">
      <div contenteditable="true" aria-multiline="true" role="textbox"
           style="padding-top: 10px;
          padding-left: 20px;"
           placeholder="Title"
           class="placeholder"
           spellcheck="false">
      </div>
    </div>
      <div class="content">

        <div contenteditable="true" aria-multiline="true" role="textbox"

             placeholder="Title"
             style="padding-top: 10px;
          padding-left: 20px;"
             spellcheck="false">
          <div
              contenteditable="true"
              placeholder="Take a note"
              class="placeholder"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AppBody",
  data() {
    return {
      inEditingMode: false
    }
  },
  methods:{
    toggle(){
      this.inEditingMode=!this.inEditingMode
    },
    log(){
      console.log(document.getElementById('content').innerHTML)
    }
  }
}
</script>

<style>
.editor {
  margin: 32px auto 16px auto !important;

  height: max-content;
  width: 600px;
  border-radius: 8px !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302);
}

.newNote {
  margin: 0 auto;
  height: 46px !important;
  border: 1px solid #5f6368;
  background-color: #202124;
  box-sizing: border-box;
  border-radius: 8px !important;

}
.placeholder{
  opacity: 0.5;
}
.noteEdit{
  height: max-content;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302);
  margin: 0 auto;
  border: 1px solid #5f6368;
  background-color: #202124;
  box-sizing: border-box;
  border-radius: 8px !important;
}
.content{
  margin-bottom: 10px;
}
[contenteditable=true]:empty:before{
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
}

@media (max-width: 700px) {
  .editor{
    width: 500px !important;
  }
}
@media (max-width: 600px) {
  .editor{
    margin-left: 60px !important;
    width: 400px !important;
  }

}
@media (max-width: 500px) {
    .editor{
      width: 344px !important;
    }
}

</style>