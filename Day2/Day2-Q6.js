let fact=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++)
    {
     f=f*i;
    }
    return console.log(`Factorial of ${n} is: ${f}`);
    
 }
 fact(1);
 fact(2);
 fact(3);