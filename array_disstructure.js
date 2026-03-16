const names=["Alice","Bob","Charlie","David"];

const [first,second,...rest]=names;

console.log(first); // This will print "Alice"
console.log(second); // This will print "Bob"
console.log(rest); // This will print ["Charlie", "David"]