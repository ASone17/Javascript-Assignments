function display(...args) {
    for (const b of args) {
        console.log(b);
    }
    console.log(`Total  Number of Arguments Passed : ${args.length}`);
}
display(34,5,67,32,7,98,43,76);