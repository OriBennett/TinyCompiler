const tokenizer = require("./tokenizer");
const parser = require("./parser");
const transformer = require("./transformer");

module.exports = function compiler(input) {
  // 1. Lexical Analysis
  const tokens = tokenizer(input);
  // 2. Syntactic Analysis
  const lispAST = parser(tokens);
  // 3. Transformation
  const jsAst = transformer(lispAST);
  // 4. Code Generation
  //
  // return jsCode
  return jsAst;
};
