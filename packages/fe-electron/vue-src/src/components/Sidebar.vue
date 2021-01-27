<template>
  <div class="hello">
      <li>BTC</li>
      <li>Gold</li>
      <li>Dollar</li>
      <li>小米</li>
      <li>中国平安</li>
      <li>招商证券</li>
      <li>招商银行</li>
      <li>许继电气</li>
      <li>平高电气</li>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  }
};
</script>

<style scoped>
li {
  width: 100%;
  padding: 10px;
  list-style-type: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 2px;
  cursor: pointer;
  background: #272727;
  color: white;
}
</style>
