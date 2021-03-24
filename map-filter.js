const nums=[3,4,5,6,7,8,9,10,11,12];
const result=nums.map(function(element){
    return element*element
})
console.log(result);
const result2=nums.map(x=>x*2);
console.log(result2);
const bigger=nums.filter(x=> x>5);
console.log(bigger);

