<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    
    }
};
</script>

<style scoped>
.active > span:not([isKnown="true"]) {
  color: red;
}

.active > span[isKnown="true"] {
  /* color:#00ff80; */
}

.text-container {
  white-space: pre-line;
}

.text-container > span:hover {
  background-color: #39b982;
  cursor: pointer;
}
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

.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.nav-chapter {
  margin-right: 1em;
}

ul {
  padding: 0 1em;
}
</style>
