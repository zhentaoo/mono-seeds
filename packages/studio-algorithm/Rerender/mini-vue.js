window.mini_vue = {
  dom:  document.querySelector('#app'),
  data: window.data,
  regex: /\{\{.+\}\}/,
  render: function () {
    // 遍历属性s
    for (var i = 0; i < this.dom.attributes.length; i++) {
      var attr = this.dom.attributes[i];

      if (this.regex.test(attr.value)) {
        attr.value = this.attrMapValue(attr.value, this.data);
      }
    }

    // 遍历文本节点
    if (this.regex.test(this.dom.text.trim())) {
      this.dom.text = this.attrMapValue(this.dom.text, this.data);
    }

    // 定制属性处理 v-if v-show v-for ......

  },
  attrMapValue: function (str, data) {
    var res = '__none__';
    var keys = str.replace('{{', '').replace('}}', '').trim().split('.');

    keys.forEach(key => {
      if (res != '__none__') {
        res = res[key]
      } else {
        res = window[key]
      }
    })

    return res;
  }

}

mini_vue.render();
