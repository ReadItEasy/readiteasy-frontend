<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :class="{ 'is-active': tab.isActive }"
          :key="index"
        >
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div.tabs {
  border-style: none none solid none;
  border-color: rgba(212, 212, 212);
  border-width: 1px;
}

ul {
  list-style-type: none;
  padding: 0px;
  display: flex;
  margin: 5px;
}

li:not(.is-active) a {
  color: grey;
}

li {
  flex-basis: 100%;
  text-align: center;
}
</style>
