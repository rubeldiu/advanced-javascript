const student =[
    {id:21, name: 'Rubel'},
    {id:31, name: 'Tafheem'},
    {id:41, name: 'Shuchi'},
    {id:71, name: 'Shammi'}
]

//get an array only name 

const result =student.map(x=>x.name);

//get id greter than 40

const result2 = student.filter(x=>x.id>40)

//only student whose id greter than 40

const result3 =student.find(x=>x.id>40)
console.log(result3);