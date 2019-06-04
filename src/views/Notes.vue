<template>
  <div class="notes">
    <v-container>
      <v-layout justify-center>
        <v-flex xs12>
      <draggable
        v-model="items"
        handle=".handle"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" name="flip-list">
          <v-list-tile
            class="listItem"
            style="cursor: pointer"
            :title="title"
            v-for="(item,i) in items"
            :key="i"
            avatar
            aria-hidden="true"
          >
            <v-list-tile-content>
              <v-list-tile-content
                @dblclick="editTodo(item)"
                v-if="!item.editing"
                :class="{'done': item.completed}"
              >{{item.desc}}</v-list-tile-content>
              <v-text-field
                v-else
                type="text"
                v-model="item.desc"
                @blur="doneEdit(item)"
                @keyup.enter="doneEdit(item)"
                @keydown.esc="cancelEdit(item)"
              ></v-text-field>
            </v-list-tile-content>
            <v-list-tile-action class="actionIcons">
              <v-icon id="removeItem" @click="remove(i)">delete</v-icon>
              <v-icon v-if="!item.completed" class="itemDone" @click="itemDone(item)">done</v-icon>
              <v-icon class="itemDone" v-else @click="{item.completed = false}">block</v-icon>
              <v-icon id="editItem" @click="editTodo(item)">edit</v-icon>
              <v-icon id="moveNote" class="handle">menu</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </transition-group>
      </draggable>
      <v-text-field
        v-model="input"
        class="addItem"
        @keyup.enter="addItem"
        solo
        label="Add Item"
        @click:append="addItem"
        append-icon="add"
      ></v-text-field>
    </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import func from '../../vue-temp/vue-editor-bridge';

export default {
  name: "Notes",
  components: { draggable },
  data: () => ({
    items: JSON.parse(localStorage.getItem("items")) || [],
    input: "",
    beforeEditCache: "",
    dragging: false,
    title: "Click to complete note, drag to sort it"
  }),
  // mounted() {
  //   this.items = JSON.parse(localStorage.getItem("items")) || [];
  // },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    addItem() {
      if (this.input.trim().length == 0) {
        return;
      }
      this.items.push({
        desc: this.input,
        completed: false,
        editing: false
      });

      localStorage.setItem("items", JSON.stringify(this.items));
      this.input = "";
    },
    remove(index) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    editTodo(item) {
      this.beforeEditCache = item.desc;
      item.editing = true;
    },
    doneEdit(item) {
      item.editing = false;
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    cancelEdit(item) {
      item.desc = this.beforeEditCache;
      item.editing = false;
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    itemDone(item) {
      item.completed = !item.completed;
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  },

  watch: {
    items() {
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }
};
</script>

<style lang="scss">
.notes {
  padding: 20px 20px 100px 20px;

}

.done {
  text-decoration: line-through;
  opacity: 0.7;
}

.addItem {
  padding-top: 100px;
}

.listItem {
  border-bottom: 1px solid rgb(128, 128, 128);
}

.listItem:last-of-type {
  margin-bottom: 40px;
}

.v-list__tile__content {
  position: relative;
  transition: all 0.3s ease;
}

#removeItem,
#editItem,
#moveNote,
.itemDone {
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #42b983;
  }
}
#moveNote {
  right: 20px;
  cursor: move;
}
.itemDone {
  right: 80px;
}

#editItem {
  right: 110px;
}
#removeItem {
  right: 50px;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
