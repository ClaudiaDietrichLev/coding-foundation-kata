function zipStrings(strA, strB) {
  
  const result = [];
  let maxLength = 0;

// em/pty strA -> only StrB will be returned
  if (strA.length===0){
    return strB;
  }
  // empty strB -> only StrA will be returned
  if (strB.length===0){
    return strA;
  }

// maxLength will be set to the longest array length
    if (strA.length < strB.length){
      maxLength = strB.length;
    } else {
       maxLength = strA.length;
    }
// maxLength-times will be added the letter of the string, but 
// only if the there is a letter.
  for (let i=0; i <= maxLength; i++){
    if (strA[i]) {result.push(strA[i])};
    if (strB[i]) {result.push(strB[i])};
  
    
  }
 return result.join("");
}
