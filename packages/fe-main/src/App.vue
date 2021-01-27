<template>
  <div>
    <!-- <h1>fe-main</h1> -->
    <div class="main-topbar">fe-main top-bar</div>
    <div class="main-content">
      <div class="main-sidebar">
        fe-main sidebar
      </div>
      <div id="sub-app" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html body {
  padding: 0;
  margin: 0;
}
.main-topbar {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background: black;
}
.main-content {
  height: calc(100vh - 45px);
  overflow: auto;
  display: flex;
}
.main-sidebar  {
  height: 100%;
  width: 250px;
  background: #e2e2e2;
}
</style>
