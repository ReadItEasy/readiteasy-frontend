<template>
  <div
    id="right-click-menu"
    v-show="viewMenu"
    v-on-clickaway="closeMenu"
    ref="rightClickMenu"
  >
    <ul>
      <li @click="rightClickWiktionary">See in wiktionary</li>
      <li>option 2</li>
      <li>option 3</li>
      <li>option 4</li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ContextMenu",
  mixins: [clickaway],
  data: () => ({
    viewMenu: false
  }),
  created: function() {
    this.$parent.$on("rightClick", this.openMenu);
  },
  methods: {
    openMenu(e) {
      console.log("this event in child", e);
      this.viewMenu = true;
      const myfunc = () => {
        let contextMenuDiv = this.$refs.rightClickMenu;
        console.log("contextMenuDiv", contextMenuDiv);
        contextMenuDiv.setAttribute("targetWord", e.target.textContent);
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
    closeMenu(e) {
      console.log("close menu", e);
      this.viewMenu = false;
    },
    rightClickWiktionary() {
      console.log("right click wikt");
    }
    //   resetCtx() {
    //     this.ctxMenuData = null;
    //     this.ctxMenuRect = null;
    //   },
    //   onContextMenu(ev, ctxMenuData) {
    //     // prevent default behaviours
    //     ev.preventDefault();
    //     ev.stopPropagation();
    //     this.ctxMenuData = ctxMenuData;
    //     this.ctxMenuRect = {
    //       x: ev.x,
    //       y: ev.y
    //     };
    //     // populate the option
    //     this.onData();
    //     // then reevaluate and set context-menu position
    //     this.reevaluatePosition();
    //   },
    //   async reevaluatePosition() {
    //     if (this.ctxMenuRect) {
    //       // using $nextTick to daley and make sure that the context-menu
    //       // options are fully rendered which will help us
    //       // to get the accurate height
    //       await this.$nextTick();
    //       await this.$nextTick();
    //       let { x, y } = this.ctxMenuRect;
    //       // get the window current inner height and width
    //       let { innerHeight, innerWidth } = window;
    //       // get the component height and width through element.getClientRects
    //       let { height, width } = this.$el.getClientRects()[0];
    //       // then subtract window inner height and width with
    //       // context-menu event source points (x, y)
    //       let dY = innerHeight - y;
    //       let dX = innerWidth - x;
    //       // check if the context-menu height is not
    //       // longer than the available
    //       if (dY < height) {
    //         y = y - height;
    //       }
    //       if (dX < width) {
    //         x = x - width;
    //       }
    //       // set the position
    //       this.style = { left: x + "px", top: y + "px" };
    //     }
    //   },
    //   async onData() {
    //     // validate if the ctxMenuData is an array and the lenght is not less then 1
    //     if (Array.isArray(this.ctxMenuData) && this.ctxMenuData.length) {
    //       // loop through the options
    //       this.ctxMenuData.forEach((item, index) => {
    //         // if this option type is equal's to divider and the handler property value is a function
    //         if (item.type !== "divider" && typeof item.handler === "function") {
    //           // select the option element with the help of the refs id
    //           let refs = this.$refs["ctx_" + index];
    //           // accessing $refs prooerty with object square bracket notation alwasys returns arrays of
    //           // HTML Elements of Vue components instance
    //           // so you have to validate
    //           if (Array.isArray(refs)) {
    //             let el = refs[0];
    //             // then attach click event and pass an arrow function as a the
    //             // event handler callback
    //             el.addEventListener(
    //               "click",
    //               () => {
    //                 // then on click on the option
    //                 // envoke the handler
    //                 // and reset the the ctxMenuData to hide the context-menu
    //                 item.handler();
    //                 this.resetCtx();
    //               },
    //               false
    //             );
    //           }
    //         }
    //       });
    //     }
    //   }
    // },
    // mounted() {
    //   // Listen on contextmenu event through the $root instance
    //   this.$root.$on("contextmenu", data => {
    //     // if the data is null reset and handler the action
    //     if (data === null) this.resetCtx();
    //     else this.onContextMenu(data.event, data.ctxMenuData);
    //   });
    // },
    // beforeDestroy() {
    //   this.$root.$off("contextmenu", () => {});
  }
};
</script>

<style scoped>
#right-click-menu {
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

#right-click-menu li {
  list-style: none;

  cursor: pointer;
  color: #39b982;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 5px;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #39b982;
  color: white;
}
</style>
