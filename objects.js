let x={
    name:"Hridoy",
    age:22,
    isStudent:true,
    hobbies:["coding","gaming","traveling"],
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    },
}

console.log(x,x.name,x.age,x.isStudent,x.hobbies,x.address,x.address.city);

for (const key in x)
{
    console.log(key);
}

console.log(Math.random()*10);

