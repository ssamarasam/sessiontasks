let input = ['abc', 'hello', 'country'];


const titleCaps = (stringArray) => {
    let output = [];
    let str = '';
    for(let i=0; i< stringArray.length; i++) {
        
        for(let j=0; j<stringArray[i].length; j++) {
            
            if(j === 0) {
                
                str = str + stringArray[i][j].toUpperCase();
            } else {
                str = str + stringArray[i][j]
            }
        }
        output.push(str);
        str = ''
    }
    return output;
}

console.log(titleCaps(input));