const person=[
    {
        name:"sachin",
        age:21,
        salary:10000
    },
    {
        name:"sachin",
        age:22,
        salary:20000
    }
]

const result=person.map(pd=>pd.salary*2);
console.log(result);