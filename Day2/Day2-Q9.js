function args(arg1,arg2,arg3){
    console.log(Math.max(arg1,arg2,arg3));
}
let x = [34,45,2];
args.apply(this,x);