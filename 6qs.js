// Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .
const Print_pattern = (N) => 
{let k,e
for(k=0;k<N;k++){
  let result=''
  for(e=0;e<=k;e++){
    result=result+'*'
    
  }
  console.log(result)
}

};