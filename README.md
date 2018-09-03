# @alifd/dts-generator
一个依据[描述 react 组件 api 信息文件](https://github.com/alibaba-fusion/api-extractor)生成 [*.d.ts](https://blogs.msdn.microsoft.com/typescript/2016/12/14/writing-dts-files-for-types/) 文件的工具。

[![npm package](https://img.shields.io/npm/v/@alifd/dts-generator.svg?style=flat-square)](https://www.npmjs.org/package/@alifd/dts-generator)

## Install

```
npm install @alifd/dts-generator
```

## Usage

``` js
const dtsGen = require('@alifd/dts-generator');
dtsGen(apiSchema).then(result => {
  console.log(result.message);
});
```

or

``` js
const dtsGen = require('@alifd/dts-generator');
const result = dtsGen(result, true);
```
