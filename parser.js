

module.exports = function parser(tokens){
    let current = 0;
    function walk(){
        let token = tokens[current];
        //if statements
        if (token.type === 'number'){ //one of the stop conditions
            current++;
            return{
                type: 'NumberLiteral',
                value: token.value
            };
        }
        if (token.type === 'paren' && token.value === '('){
            token = tokens[++current];
            const expression = {
                type: 'CallExpression',
                name: token.value,
                params: []
            }
            token = tokens[++current];
            while (token.value !== ')'){
                expression.params.push(walk());
                token = tokens[current];
            }
            current++;
            return expression;
        };
        throw new TypeError(`unkown token: '${token.type}'`);
        //https://citw.dev/tutorial/create-your-own-compiler?p=6 this is where im at
    }
    const ast = {
        type: 'Program',
        body: [walk()]
    };

    return ast;
}