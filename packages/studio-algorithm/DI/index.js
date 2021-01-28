// 依赖注入实现
var DI = new (require('./DI'))();

// 注册服务
DI.inject('person',require('./person'));
DI.inject('tom',require('./tom'));
DI.inject('jack',require('./jack'));
DI.inject('animal',require('./animal'));

// tom模块依赖于person，animal ，解决tom的依赖并返回 解决依赖之后的tom模块
tom = DI.resolve(require('./tom'));

// jack模块依赖于person ，解决jack的依赖并返回 直接返回运行结果
jack = DI.resolve(require('./jack'));

tom();
