// Task-1
function simple(num)
{
    return num % 2 !=0 ? "true" : "false"
}
console.log(simple(6));

// Task-2
function factorial(num)
{
    let cnt = 1
    for(let i = 1 ; i <= num ; i++)
    {
        cnt *=i
    }
    return cnt
}
console.log(factorial(4));

// Task-3
function sum(num)
{
    let cnt = 0
    for(let i = 0 ; i <= num ; i ++)
    {
        cnt+=i
    }
    return cnt
}
console.log(sum(5))

// Task-4
function midle(num)
{
    let cnt = 0
    let number = 0
    for(let i = num ; i > 0 ; i = Math.floor(i / 10 ))
    {
        cnt += i % 10
        number ++
    }
    return cnt / number;
}
console.log(midle(2456));

// Task-5
function mxormn(num)
{
    let cnt = 0
    let mx = num % 10 , mn = num % 10
    for(let i = num ; i > 0 ; i = Math.floor(i / 10))
    {
        cnt = i % 10
        mx <= cnt ? mx = cnt : mn >= cnt ? mn = cnt : "false"
    }
    console.log("min : " + mn + "  max : " + mx);
}
console.log(mxormn(732));

// Task-6
function palidrom(num)
{
    let rev = 0
    for (let i = num ; i > 0 ; i= Math.floor(i / 10))
    {
        rev = rev * 10 + i % 10 
    }
    return rev == num ? "true" : "false"
}
console.log(palidrom(747647));

// Task-7
function muodila(num1, num2)
{
    return num2 / num1
}
console.log(muodila(2,3));

// Task-8
function fidonachi(num)
{
    let cnt = 0
    let number = ""
    for(let i = 1 ; i <= num ; i= Math.floor(i+cnt) )
    {
        cnt += i
        number = (cnt + " ");
    }
    return number
}
console.log(fidonachi(22));