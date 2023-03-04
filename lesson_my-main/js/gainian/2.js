function sum(a,b) {

    let args = Array.prototype.concat.apply([], arguments);
    // console.log(args);
    return args.reduce((pre,cre) => pre + cre)
}
console.log(sum(7,8));