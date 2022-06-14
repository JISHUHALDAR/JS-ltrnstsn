// Print the Table
// Write a program which takes a number from user and print the table
const Print_Table = (N) => 
{let result=''
for(let i=1;i<=10;i++){
  result=N+' '+'*'+' '+i+' '+'='+' '+N*i;
  console.log(result)
}
	
};