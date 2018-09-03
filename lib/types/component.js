const Base = require('./base');

module.exports = class Component extends Base {
  toString() {
    const exportType = this.isEntry ? 'export default' : 'export';
    this.subComponents = this.subComponents || [];
    this.methods = this.methods || [];

    return `
      ${exportType} class ${this.name} extends React.Component<${this.name}Props, any> {
  ${this.subComponents.map(item => {
    return `static ${item.name}: typeof ${item.name};`;
  }).join('\n')}
  ${this.methods.filter(method => {
    return method.modifiers && method.modifiers.indexOf('static') > -1;
  }).map(method => {
    return `static ${method.name}(${method.params.map(param => {
      return `${param.name}: ${this.mapping(param.name, param)}`;
    }).join(', ')}): ${method.returns ? this.mapping(method.returns.name, method.returns) : 'void'};`;
  }).join('\n')}
      }
    `;
  }
};
