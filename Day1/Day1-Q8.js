let word='CITIUSTECH';
let count=0;
for(let i=0;i<word.length;i++)
{
    if(word.charAt(i)=='A'||word.charAt(i)=='E'||word.charAt(i)=='I'||word.charAt(i)=='O'||word.charAt(i)=='U'){
        count++;
    }
}
console.log(count-1);
