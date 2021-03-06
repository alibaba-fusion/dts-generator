const ARRAY = /ARRAY/i;
const ENUM = /ENUM/i;
const UNION = /UNION/i;
const OBJECT = /OBJECT/i;
const FUNC = /FUNC(TION)?/i;
const STRING = /STRING/i;
const BOOL = /BOOL(EAN)?/i;
const NUMBER = /NUMBER/i;
const ELEMENT = /ELEMENT/i;
const NODE = /NODE/i;

class Base {
  constructor(opts) {
    Object.assign(this, opts);
  }
  /**
   * 右值的映射
   * @param {*} key
   * @param {*} value
   */
  mapping(key, value) {
    const typeName = value.type ? value.type.name : value;
    const typeValue = value.type ? value.type.value : '';

    if (key === 'style') {
      return 'React.CSSProperties';
    }

    if (ARRAY.test(typeName)) {
      return 'Array<any>';
    }

    if (ELEMENT.test(typeName)) {
      return 'React.ReactElement<any>';
    }

    if (NODE.test(typeName)) {
      return 'React.ReactNode';
    }

    if (ENUM.test(typeName)) {
      if (typeValue) {
        return typeValue.map(item => item.value).join(' | ');
      }
    }

    if (UNION.test(typeName)) {
      if (typeValue) {
        return typeValue.map(item => this.mapping(null, item.name || item)).join(' | ');
      }
    }
    if (OBJECT.test(typeName)) {
      return new Obj({
        properties: value.properties || []
      }).toString();
    }

    if (FUNC.test(typeName)) {
      if (!value.type) {
        return '(() => void)';
      } else {
        return new Func({
          params: value.params,
          returns: value.returns
        });
      }
    }

    if (STRING.test(typeName)) {
      return 'string';
    }

    if (BOOL.test(typeName)) {
      return 'boolean';
    }

    if (NUMBER.test(typeName)) {
      return 'number';
    }

    return 'any';

  }
  /**
   * 一个类转换为 TS 的方法，由子类自己实现
   */
  toString() {
    throw new TypeError('This method should Subclasses implement');
  }
}

class Func extends Base {
  toString() {
    return `
  ((${(this.params || []).map(param => {
    if (param.name.indexOf('.') > -1) {
      return '';
    }

    return `${param.name}: ${this.mapping(param.name, param)}`;
  }).filter(_ => _).join(',')}) => ${this.returns ? this.mapping(this.returns.name, this.returns) : 'void'})
    `;
  }
}

class Obj extends Base {
  toString() {
    return `{
  ${this.properties.map(property => {
    return `${property.name}: ${this.mapping(property.name, property)}`;
  })}
      }
    `;
  }
}

module.exports = Base;
