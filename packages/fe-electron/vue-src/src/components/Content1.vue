<template>
    <div id="c1" style="width: 100%;height:100%;">
    </div>
</template>

<script>
import Vue from "vue";
import G2 from "g2";

const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 1150 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 }
];

export default {
  name: "Content",
  props: {
    msg: String
  },
  mounted() {
    var data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ];
    var chart = new G2.Chart({
      id: "c1",
      height: 1000
    });
    chart.source(data, {
      genre: {
        alias: "游戏种类" // 列定义，定义该属性显示的别名
      },
      sold: {
        alias: "销售量"
      }
    });
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .position("genre*sold")
      .color("genre");
    // Step 4: 渲染图表
      chart.render();
      chart.forceFit();
  }
};
</script>

<style scoped>
</style>