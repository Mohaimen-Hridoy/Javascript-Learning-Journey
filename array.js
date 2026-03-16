var friends=["Hridoy","Sabbir","Rafiq","Shuvo",{age :23},[1,2,3,4,5]];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
console.log(friends[5]);

console.log(friends[5][0]);
console.log(friends[5][1]);     
console.log(friends[5][2]);
console.log(friends[5][3]);
console.log(friends[5][4]);


console.log(friends.length);

console.log(friends.push("Rafiq"));
console.log(friends);
console.log(friends.unshift("Shuvo"));
console.log(friends);
console.log(friends.pop());
console.log(friends);
console.log(friends.shift());
console.log(friends);