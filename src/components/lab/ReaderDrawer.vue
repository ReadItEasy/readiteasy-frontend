<template>
  <transition name="slide-fade">
    <div id="reader-drawer" class="drawer">
      <h1>my reader drawer</h1>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.drawer {
  z-index: 1;
  position: fixed;
  top: 60px;
  right: 0px;
  height: 100vh;
  width: 300px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  border-style: none none none solid;
  border-color: grey;
  border-width: 1px;
  display: flex;
  flex-direction: column;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
