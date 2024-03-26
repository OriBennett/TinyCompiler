const tokenizer = require('./tokenizer');

module.exports = function compiler(input){
  // 1. Lexical Analysis
  // 2. Syntactic Analysis
  // 3. Transformation
  // 4. Code Generation
  //
  // return jsCode
const tokens = tokenizer(input);
return tokens
}