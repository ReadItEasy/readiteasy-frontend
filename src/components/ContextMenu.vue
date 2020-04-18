<template>
  <div
    id="context-menu"
    v-if="viewMenu"
    ref="contextMenu"
    :target-word="targetWord"
  >
    <ul>
      <li @click="openWikt">See in wiktionary</li>
      <li v-if="isKnown">Remove from known words</li>
      <li v-else>Add to known words</li>
      <li>option 3</li>
      <li>option 4</li>
    </ul>
  </div>
</template>

<script>
import EventBus from "@/services/EventBus.js";

export default {
  name: "ContextMenu",
  data: () => ({
    viewMenu: false,
    targetWord: null,
    isKnown: null
  }),
  created: function() {
    document.addEventListener("click", this.onWindowClick);
    EventBus.$on("openContextMenu", this.openMenu);
  },

  methods: {
    onWindowClick(e) {
      if (this.viewMenu) {
        var contextMenuDiv = this.$refs.contextMenu;
        if (e.target.closest("#context-menu") !== contextMenuDiv) {
          this.closeMenu();
        }
      }
    },
    // TODO : should we change the "right clicking on a normal element while
    //        the custom contextMenu is open" behavior
    // onWindowContextMenu(e) {
    //   console.log("on window context menu", e);
    //   if (this.viewMenu) {
    //     var contextMenuDiv = this.$refs.contextMenu;
    //     if (e.target.closest("#context-menu") !== contextMenuDiv) {
    //       this.closeMenu()
    //     }
    //     }else {
    //       this.openMenu(e)
    //   }

    // },
    openMenu(e) {
      console.log("this event in child", e);
      this.viewMenu = true;
      this.targetWord = e.target.textContent;
      this.isKnown = e.target.getAttribute("isKnown");
      const myfunc = () => {
        var contextMenuDiv = this.$refs.contextMenu;
        console.log("contextMenuDiv", contextMenuDiv);
        this.contextMenuDiv = contextMenuDiv;
        console.log("e.target.textContent", e.target.textContent);
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.clientHeight;
        const ctxWidth = contextMenuDiv.offsetWidth;
        const ctxHeight = contextMenuDiv.offsetHeight;
        const spaceOffSet = 25;
        const offSetX = Math.min(pageWidth - (ctxWidth + e.x + spaceOffSet), 0);
        const offSetY = Math.min(
          pageHeight - (ctxHeight + e.y + spaceOffSet),
          0
        );
        if (offSetY < 0) {
          contextMenuDiv.style.top = e.layerY - ctxHeight + "px";
        } else {
          contextMenuDiv.style.top = e.layerY + offSetY + "px";
        }
        if (offSetX < 0) {
          contextMenuDiv.style.left = e.layerX - ctxWidth + "px";
        } else {
          contextMenuDiv.style.left = e.layerX + offSetX + "px";
        }
      };
      // set a async because if not, the contextmenu style doesnt generate on time
      // to be able to fetch his size.
      setTimeout(myfunc, 0);
    },
    closeMenu() {
      console.log("close menu");
      this.viewMenu = false;
      this.targetWord = null;
      this.isKnown = null;
    },
    openWikt() {
      window.open(
        `https://en.wiktionary.org/wiki/${this.targetWord}`,
        "_blank"
      );
      this.closeMenu();
    }
  }
};
</script>

<style scoped>
div {
  background: white;
  border: 1px solid #bdbdbd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 250px;
  z-index: 999;
}

div li {
  list-style: none;

  cursor: pointer;
  color: #39b982;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 5px;
}

div li:last-child {
  border-bottom: none;
}

div li:hover {
  background: #39b982;
  color: white;
}

ul {
  padding: 0 1em;
}
</style>
