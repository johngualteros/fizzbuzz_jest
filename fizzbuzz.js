function fizzbuzz(number){

    const divisible=(divisor,number)=>number%divisor===0;
    if(typeof number !== 'number'){
        return 'Invalid input Only can accept numbers';
    }
    if(number===0){
        return 0;
    }
    if(divisible(3,number) && divisible(5,number)){
        return 'FizzBuzz';
    }
    if (divisible(3,number)){
        return 'Fizz';
    }
    if(divisible(5,number)){
        return 'Buzz';
    }
    return number;
}
function print(number){
    for(let i=0;i<=number;i++){
        console.log(`${i} : ${fizzbuzz(i)}`);
    }
}
print(20);
module.exports = fizzbuzz;