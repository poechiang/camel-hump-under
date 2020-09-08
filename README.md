# @poech/camel-dump-under

JavaScript name conversion

# Install

npm
```bash
$ npm install @poech/camel-dump-under --dev-save
```

yarn
```bash
$ yarn add @poech/camel-hump-under -D
```

## Usage


```js

// const is = require( '@poech/camel-hump-under' );
import chu from '@poech/camel-hump-under';

const { camel, hump, hyphen, underline } = chu


let v = 'abCde-fg-Hi_gk_Lmn';
console.log(camel(v));		// abCdeFgHiGkLmn
console.log(hump(v));		// AbCdeFgHiGkLmn (Capitalize the first letter)
console.log(hyphen(v));		// ab-cde-fg-hi-gk-lmn 
console.log(underline(v));	// ab_cde_fg_hi_gk_lmn
```

