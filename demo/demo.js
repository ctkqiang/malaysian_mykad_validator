import ic from '../lib/index.js';

let mykad = new ic('991007077734').validate();
let mykad_with_dash = new ic('991007-07-1234').validate();
console.log(mykad, mykad_with_dash);