module.exports = function reverse (n) {
    const n1 = String(n);
    const nReverse = n1.split('').map((index) => index === '-' ? '' : index).reverse().join(''); 
    return nReverse;
}
