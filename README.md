# kebab-caseify
Convert any string into kebab case - /ie: kebab-case

##Overview

Convert a space separated string to kebab-case. Lightweight and easy to drop into your projects

##Installing 

```javascript
npm i kebab-caseify --save-dev
```

##Usage

Simply require the `kebab-caseify` module. The export function can be used in any module you desire.

Install with [npm]()

```javascript
const kebabCaseify = require('kebab-caseify');

kebabCaseify('Quux Bar');
//==> 'quux-bar
kebabCaseify('Quux Foo Bar');
//==> 'quux-foo-bar'
kebabCaseify('foo Bar quux');
==> 'foo-bar-quux'
kebabCaseify('Bar FOO norf');
```

##TODO

---

##Tests

`npm test`

WIP

```javascript
// wip
```

##Related Modules

* [node-range](https://github.com/ahadb/node-range)
* [first-of-array](https://github.com/ahadb/first-of-array)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)

##Contributing

Feel free to file an issue or bug.
