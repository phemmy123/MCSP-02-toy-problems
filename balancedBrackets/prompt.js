// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    // describe the open and close ssets of parenthesis, curly brackets and square brackets
    //  describe the pairs of curly brackets, parenthesis, and square brackets
    const open = new Set(['{','[', '('])
    const close = new Set(['}', ']', ')'])
    const pair = { '{':'}', '[':']', '(': ')' }
    //  declare a new variable with an empty array for storage
    const result= [];
    if(str === ''){
        return true
    } else if(close.has(next) && pairs[result.pop()] !== next){
        return false
    }
};





