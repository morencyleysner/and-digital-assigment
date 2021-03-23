// function solution (input) {

//     // logic here
  
//     return null; 
//   }
  
//   // some example inputs
//   console.log(solution('326')); // expected ouput 632,623,362,326,263,236
//   console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236


function solution(input) {
    let hasLettersOnly = /^[a-zA-Z]+$/.test(input);
    let pattern = /[0-9]/g;
    let filtered = [];
    
    if(hasLettersOnly){
        console.log("Has no integers");
    } else {
        filtered = input.match(pattern).join("");
        let combinations = [];
        let output = [];
    
        if (filtered.length === 1) {
            return input;
        }
    
        for (let i = 0; i < filtered.length; i++) {
            const currentChar = filtered[i];
            const charsLeft = filtered.slice(0, i).concat(filtered.slice(i + 1));
            const permute = solution(charsLeft);   
    
            for(let j = 0; j < permute.length; j++) {
                const permuted = currentChar.concat(permute[j]);
                combinations.push(parseInt(permuted));
            }
        }
    
        output = combinations.reverse();
        
        return output;
    }
}

console.log(solution("326"));
console.log(solution('A 3B2 C6D'));
console.log(solution('02518'));
console.log(solution('ABCD'));
console.log(solution('122'));
console.log(solution('203'));






