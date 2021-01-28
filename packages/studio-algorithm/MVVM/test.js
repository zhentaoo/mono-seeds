!function(f) {
  if (window.define && define.amd) define(f)
  else window.mvvm = f()
}(function() {

var start = '{{'
var end = '}}'

function mvvm(sel, opt) {
  return new MVVM(sel, opt)
}

function MVVM(sel, opt) {
  this.root = document.querySelector(sel) // root element
  var model = this.pureModel = opt.model || {}
  var model2sync = {} // save nodes
  this.model = getProxyModel()
  var me = this
  for (var k in model) {
    model2sync[k] = []
  }
  renderDOM(this.root, opt.model)

  if (opt.type === 'form') {
    on(this.root, ['keyup', 'click'], function(e) {
      var name = e.target.name
      if (name) {
        if (e.target.value != model[name]) {
          me.model[name] = e.target.value
        }
      }
    })
  }

  function getProxyModel() {
    var obj = {}
    each(Object.keys(model), function(i, k) {
      Object.defineProperty(obj, k, {
        set: function(v) {
          model[k] = v
          var arr = model2sync[k]
          each(arr, function() {
            this.node.textContent = renderStr(this.raw)
          })
        },
        get: function() {
          return model[k]
        }
      })
    })
    return obj
  }

  function renderDOM(dom) {
    each(dom.attributes, function() {
      render(this)
    })
    each(dom.childNodes, function() {
      if (this.nodeType === 1) {
        return renderDOM(this)
      }
      render(this)
    })
  }

  function renderStr(str) {
    var ret = ''
    var arr = str.split(start) // sure have length
    for (var i = 0; i < arr.length; i++) {
      var two = arr[i].split(end)
      if (two.length === 1) ret += arr[i]
      else ret += model[two[0]] + two[1]
    }
    return ret
  }

  function render(node) {
    var arr = node.textContent.split(start)
    if (!arr.length) return
    var ret = ''
    for (var i = 0; i < arr.length; i++) {
      var two = arr[i].split(end)
      if (two.length === 1) ret += arr[i]
      else {
        ret += model[two[0]] + two[1]
        model2sync[two[0]].push({
          node: node,
          raw: node.textContent
        })
      }
    }
    node.textContent = ret
  }
}

function on(el, events, handler) {
  if (Array.isArray(events)) {
    each(events, function() {
      on(el, this, handler)
    })
  }
  else el.addEventListener(events, handler, true)
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn.call(arr[i], i, arr[i])
  }
}
return mvvm

})


// demo

var $ = document.querySelector.bind(document)
var demo1 = mvvm('#demo1', {
  model: {
    name: 'Monkey',
    time: Date(),
    css: 'green'
  }
})
setInterval(function() {
  demo1.model.time = Date()
}, 1000)
var a = mvvm('#demo2', {
  type: 'form', // 同步
  model: {
    name: '',
    password: ''
  }
})
