

module.exports = function parser(tokens){
    let current = 0;
    function walk(){
        let token = tokens[current];
        //if statements
        if (token.type === 'number'){
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