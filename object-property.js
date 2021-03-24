const students=[
    {id:01,name:"jakia"},
    {id:02,name:"ramisa"},
    {id:03,name:"puja"},
    {id:04,name:"zim"},
    {id:05,name:"oishy"}

]
const names=students.map(s=>s.name);
console.log(names);
const specific=students.filter(s=>s.id>2);
console.log(specific);