const traverse = require('./traverse');
module.exports = function transformer(originalAST) {
  const jsAST = {
    type: "Program",
    body: [],
  };

  let position = jsAST.body;

  traverse(originalAST, {
    NumberLiteral(node) {
        position.push({ // <-- the position variable does not exist yet
          type: 'NumericLiteral',
          value: node.value
        });
      },
      CallExpression(node, parent){
        let expression = {
            type: 'CallExpression',
            calee: {
                type: 'Identifier',
                name: node.name
            },
            arguments: []
        };
        const prevPosition = position;
        position = expression.arguments;
        if (parent.type !== 'CallExpression'){
            expression = {
                type: 'ExpressionStatement',
                expression
            };
        }
        prevPosition.push(expression);
      }
  })

  return jsAST;
};
