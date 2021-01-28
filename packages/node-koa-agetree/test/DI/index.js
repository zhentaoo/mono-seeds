var DI = new (require('./DI'))();

DI.inject('person',require('./person'));
DI.inject('tom',require('./tom'));
DI.inject('jack',require('./jack'));
DI.inject('animal',require('./animal'));

tom = DI.resolve(require('./tom'));
jack = DI.resolve(require('./jack'));

tom();
