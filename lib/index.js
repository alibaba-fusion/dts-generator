const prettier = require('prettier');

const Interface = require('./types/interface');
const Component = require('./types/component');

function run(schema, syncExec) {
  let subComponents = schema.subComponents;
  schema.isEntry = true;
  let entryComponent = _run(schema);

  if (Array.isArray(subComponents)) {
    // submodules is nullable
    subComponents = subComponents.map(component => _run(component));
  } else {
    subComponents = [];
  }

  const formatted = prettier.format(
    _createHead() + subComponents.join('\n') + entryComponent,
    {
      parser: 'typescript'
    }
  );

  if (syncExec) {
    return {
      message: formatted
    };
  }

  return Promise.resolve({
    message: formatted
  });
}

function _run(component) {
  const name = component.name;
  const subComponents = component.subComponents;
  const isEntry = component.isEntry;

  const reactProps = new Interface({
    name,
    props: component.props || {},
    propsExtends: component.propsExtends
  });
  const reactComponent = new Component({
    name,
    subComponents,
    methods: component.methods,
    isEntry
  });
  return reactProps.toString() + reactComponent.toString();
}

function _createHead() {
  return `
    /// <reference types="react" />\n
    import * as React from 'react';\n
  `;
}

module.exports = run;
