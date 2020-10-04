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
             @input="handleInputTitle"
             spellcheck="false">
        </div>
      </div>
      <div class="content">

        <div contenteditable="true" aria-multiline="true" role="textbox"

             placeholder="Take a note"
             class="placeholder"
             @input="handleInputContent"
             style="padding-top: 10px;
          padding-left: 20px;"
             spellcheck="false">
        </div>
      </div>

      <div class="close">
        <v-btn @click="save" class="close-text" style="float: left;: right">Close</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "AppBody",
  data() {
    return {
      inEditingMode: false,
      content: "",
      title:""
    }
  },
  methods: {
    toggle() {
      this.inEditingMode = !this.inEditingMode
      this.save()
    },
    handleInputContent: function (e) {
      this.content = e.target.innerText
    },
    handleInputTitle:function (e) {
      this.title=e.target.innerText
    }
  ,
    save() {
      eventBus.$emit('newnote', {
        title: this.title,
        content: this.content
      })
      this.inEditingMode=false
      this.title=""
      this.content=""
    }
  }
}
</script>

<style>
.close-text {
  float: right;
  margin-left: 3px !important;
  color: white;
  text-transform: none !important;
  opacity: 0.9 !important;
  background: none !important;
  box-shadow: none !important;
  font-size: 0.8rem;
}

.close {
  display: flex;
  float: none !important;
  opacity: 0.9 !important;
}

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

.placeholder {
  opacity: 0.5;
}

.noteEdit {
  height: max-content;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302);
  margin: 0 auto;
  border: 1px solid #5f6368;
  background-color: #202124;
  box-sizing: border-box;
  border-radius: 8px !important;
}

.content {
  margin-bottom: 10px;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
}

@media (max-width: 700px) {
  .editor {
    width: 500px !important;
  }
}

@media (max-width: 600px) {
  .editor {
    margin-left: 60px !important;
    width: 400px !important;
  }

}

@media (max-width: 500px) {
  .editor {
    width: 344px !important;
  }
}

</style>
