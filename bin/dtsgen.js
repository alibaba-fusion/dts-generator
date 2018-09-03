#!/usr/bin/env node

const path = require('path');
const generate = require('../lib');

const schemaPath = path.join(process.cwd(), process.argv.slice(2)[0]);
const schema = require(schemaPath);

console.log(generate(schema, true).message);
