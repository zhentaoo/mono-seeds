<template>
  <div id="app">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Content />
    </div>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Content,
    Sidebar,
  }
};
</script>

<style>
html,
body,
#app {
  padding: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  color: white;
  display: flex;
}
.sidebar {
  border-right: 2px solid rgb(165, 151, 151);
  overflow: auto;
  width: 200px;
  box-sizing: border-box;
}
.content {
  border-right: 2px solid white;
  overflow: auto;
  height: 100%;
  width: calc(100% - 200px);
  padding: 10px;
  box-sizing: border-box;
}
</style>
