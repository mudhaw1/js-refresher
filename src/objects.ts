type Person ={ firstName: string; lastName?: string; age?: number;}
// ? = not required

const rufus = {firstName: "Rufus",lastName:"McQueue",age: 65};


function add(numA, numB){
    return numA + numB;
}

const addStuff = (numA: number, numB: number): number =>{
    return numA + numB ;
};

const addThings = (numA, numB) => numA + numB ;

console.log(add(4,5));