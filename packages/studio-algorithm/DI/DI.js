var DI = function() {
  this.module = {};
}

// 注入依赖
DI.prototype.inject = function(k, v) {
  this.module[k] = v;
}

// 解析一个模块的依赖
DI.prototype.parseDependency = function(funcStr) {
  if (typeof funcStr == 'function') {
    funcStr = funcStr.toString();
  }

  var regexp = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var args = funcStr.match(regexp)[1];
  args = args.replace(/ /g, '').split(',');
  return args;
}

// 返回一个func运行结果
DI.prototype.resolve = function(func) {
  if (typeof func != 'function') {
    return func;
  }

  var dependencies = this.parseDependency(func);
  var args = [];

  for (var i = 0, lenth = dependencies.length; i < lenth; i++) {
    var dependencyValue = this.module[dependencies[i]];
    var arg = this.resolve(dependencyValue);

    args.push(arg);
  }

  return func.apply(this, args);
}

module.exports = DI;
