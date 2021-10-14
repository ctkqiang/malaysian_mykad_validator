# malaysian_mykad_validator

A simple Malaysian Identity Card Validator

This is a package for validate Malaysian Identity card, get user current age, place of birth and birthday

```json
// SAMPLE RESPONSE WITH DUMMY DATA
{
  "identity_card_number": "991007071234",
  "birth_date": "07 OCT 1999",
  "birth_place": "PENANG",
  "age": 22
}
```

#### Installation:

```json
npm install malaysian_mykad_validator --save
```

#### Usage:

The javascript discipline used in this package is `ES6` where the `package.json` is set to `"type": "module"`

```javascript
import ic from "malaysian_mykad_validator";

let mykad = new ic("991007077734").validate();
let mykad_with_dash = new ic("991007-07-1234").validate();

console.log(mykad, mykad_with_dash);
/**
 * Both Output are identical
 *
 * {
 *   identity_card_number: '991007071234',
 *   birth_date: '07 OCT 1999',
 *   birth_place: 'PENANG',
 *   age: 22
 * }
 */
```
