function sum(...a) {
    res = 0;
    for (i = 0; i < a.length; i++) {
        res += a[i];
    }
    console.log(`The Sum is = ${res}`);
}
sum(7,17,27,84,3);
sum();  