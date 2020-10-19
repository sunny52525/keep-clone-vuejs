<template>
  <div class="keeps container">
    <v-dialog v-model="dialog" width="800px">
      <template> </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text>
          {{ dialogBody }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="white darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row
      class="grid"
      v-packery="{ itemSelector: '.packery-item', percentPosition: true }"
      :class="{ row: defaultLayout }"
    >
      <div
      v-packery-item
        :class="{

          'col-lg-2': defaultLayout,
          'col-md-4': defaultLayout,
          'col-sm-12': defaultLayout,
          'packery-item': true,
          'each-keep': true,
          'layout-simple': !defaultLayout,
        }"
        v-for="(keep, index) in keepDataMain"
        :key="index"
        @mouseover="showDelete(index)"
        @mouseleave="hover = -1"
      >
        <div
          class="content-body"
          :class="{ 'content-body-temp': !defaultLayout }"
          style="max-height: 400px; overflow: hidden"
          @click="showDialog({ title: keep.title, body: keep.content })"
        >
          <h1>
            {{ keep.title }}
          </h1>
          <p>{{ keep.content }}</p>
        </div>

        <transition name="fade">
          <div
            class="delete-icon"
            v-if="index === hover"
            @click="deleteNote(index)"
          >
            <div style="float: right !important; width: 32px; height: 32px">
              <v-icon> fa-trash </v-icon>
            </div>
          </div>
        </transition>
      </div>
    </v-row>
    <v-snackbar v-model="deletedSnackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#8Ab4F8"
          text
          v-bind="attrs"
          @click="deletedSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "Content",
  data() {
    return {
      // keepDataMain: [].reverse(),
      deleteIconVisible: false,
      hover: -1,
      deletedSnackbar: false,
      text: "Note Trashed",
      defaultLayout: true,
      dialog: false,
      dialogTitle: "",
      dialogBody: "",
    };
  },
  props: ["keepDataMain", "isTrash"],
  methods: {
    showDelete(index) {
      this.hover = index;
    },
    deleteNote(index) {
      this.dialog = false;
      eventBus.$emit("trashed", this.keepDataMain[index]);
      this.keepDataMain.splice(index, 1);
      this.deletedSnackbar = true;
    },
    showDialog(dialogData) {
      this.dialogTitle = "" || dialogData.title;
      this.dialogBody = "" || dialogData.body;
      console.log(dialogData);
      this.dialog = true;
    },
  },
  components: {},
  created() {
    eventBus.$on("newnote", (data) => {
      this.keepDataMain.push(data);
    });
    eventBus.$on("changeLayout", () => {
      this.defaultLayout = !this.defaultLayout;
    });
  },
};
</script>

<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
.grid {
  height: max-content !important;
}
.each-keep {
  border-radius: 8px !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 2px 6px 2px rgba(0, 0, 0, 0.302);
  border: 1px solid #5f6368;
  margin-left: 10px;
  margin-top: 10px !important;
  height: fit-content;
  /*width: 100px;*/
  width: 100vh !important;
  /*margin-right: 10px !important;*/
}
.delete-icon {
  display: flex;
  width: 24px;
  height: 24px;
  right: 10px;
  bottom: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.layout-simple {
  width: 600px !important;
  padding: 10px;
  margin: 0 auto;
}
.content-body-temp {
  width: 600px;

  word-wrap: break-word;

  padding: 20px;
}

.content-body {
}
</style>