const tokenizer = require('./tokenizer');
const parser = require('./parser');

module.exports = function compiler(input){
  // 1. Lexical Analysis
  const tokens = tokenizer(input);
  // 2. Syntactic Analysis
  const lispAST = parser(tokens);
  // 3. Transformation
  // 4. Code Generation
  //
  // return jsCode
return lispAST;
}