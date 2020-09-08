<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slidebar">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  // data: () => ({
  //   isPanelOpen: true
  // }),
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen;
    }
  },
  methods: {
    closeSidebarPanel() {
      this.$store.dispatch("toggleNav");
    }
  }
};
</script>
<style scoped>
.sidebar {
  position: absolute;
}
.slidebar-enter-active,
.slidebar-leave-active {
  transition: transform 0.2s ease;
}

.slidebar-enter,
.slidebar-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 250px;
}
</style>
