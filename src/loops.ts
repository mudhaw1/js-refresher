// loops - use boolean expressions 

let x = 10;
const y = 20;

while (x<y){
    console.log("doing while loop",x);
    x = x + 1 ;
}
//use ctrl c to cancel infinite loops in terminal


//checks for conditions after running rather than b4
do{
    console.log("doing do-while loop", x);
    x = x + 1 ;  
} while (x<y);

// for loop 
// let i = 0 initilization 
// i < 6 conditional 
// i++ - run after each block (increments variable and stores in i)
for( let i = 0; i < 6; i++ ){
    console.log("For",i);
}
