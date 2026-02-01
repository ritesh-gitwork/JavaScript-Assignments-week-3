// Sum values in object arrays

const items = {
    food:[10,20,30],
    travel:[5,15],
    bills:[40,60]
}

let sum = {
    food:items.food[0]+items.food[1]+items.food[2],
    travel:items.travel[0]+items.travel[1],
    bills:items.bills[0]+items.bills[1]
}

// console.log(sum);

// <------------------------------------------------>

// 2.Count word occurrences in array

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

const count = fruits.reduce((acc,word)=>{
    acc[word] = (acc[word] || 0) + 1
    return acc;
},{})

// console.log(count);


// 3. Swap keys and values of object

const charac = { 
    a: "x", 
    b: "y", 
    c: "z" 
}

const reverse = Object.fromEntries(
    Object.entries(charac).map(([key,value])=>[value,key]))

// console.log(reverse);


// 4. Find the largest value key

const num = { 
    a: 10, 
    b: 50, 
    c: 20,
    d:60
}

const max = Object.keys(num).reduce(
    function(a,b){
        return num[a] > num[b] ? a : b })
    
// console.log(max);
    


// 5. Flatten object of arrays into one array

const obj={
    fruits: ["apple", "banana"], 
    veggies: ["carrot", "pea"]
}

const flatobj = Object.values(obj).flat()
// console.log(flatobj);


const flat = Object.keys(obj).reduce((acc,curr)=>{ 
    return acc.concat(obj[curr])},[])

// console.log(flat);


// 6. Group people by city

const person = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]

const grouped = person.reduce((acc,currPeople)=>{
    acc[currPeople.city] = acc[currPeople.city] || [];
    acc[currPeople.city].push(currPeople.name);
    return acc;
},{})

// console.log(grouped);


// 7. Filter object by values > 50

const value = {
    a: 20, 
    b: 60, 
    c: 40, 
    d: 90
}

const filter = Object.fromEntries(
    Object.entries(value).filter(([key,value]) => value>50))

// console.log(filter);


// ==========================================================================

// 8. Find student with highest average mark

const marks = {
    A: [80, 90], 
    B: [70, 75, 85]
    
}

let topStudent =null
let maxAvg = -Infinity

for(let student in marks){
    const totalmarks = marks[student] // array of marks
    const avg = totalmarks.reduce((a, b) => a + b,0)/totalmarks.length

    if(avg>maxAvg){
        maxAvg = avg
        topStudent=student
    }
}

// console.log(topStudent);


// 9. Unique values across all object arrays

const value1 ={
    x: [1,2,3], y: [2,3,4], z: [4,5]
}

const result = [...new Set(Object.values(value1).flat())]

// console.log(result);

//2nd method

let result1=[]

for(let key in value1){
    for(let value of value1[key]){
        if(!result1.includes(value)){
            result1.push(value)
        }
    }
}

// console.log(result1);

// 3 Method => can also be done by reduce

//=========================================================================

// 10. Pick only given keys from object

const data = {
    name: "Rahul", age: 23, city: "Noida"
}
const keys = ["name","city"]

const ans = keys.reduce((acc,key)=>{
    if(key in data){
        acc[key] = data[key]
    }
    return acc
},{})

// console.log(ans);

// 2nd method using loop 


// 11. Find student with highest average marks
  
   // done in 8



// 12. Sort object entries by values (ascending)

const entries = {
    a: 3, 
    b: 1, 
    c: 2
}

const sortObject = (Object.entries(
    entries).sort((a,b)=> a[1]-b[1]))

// console.log(Object.fromEntries(sortObject)); // return object
// console.log(sortObject); // return array


// 13. Count number of keys in object

const data1={
    a: 1, b: 2, c: 3 
}

// console.log(Object.keys(data1).length);


// 14. Capitalize string values inside object

const personData = {
    name: "alice", 
    city: "delhi"
}

const sol = Object.fromEntries(
    Object.entries(personData).map(([key2,value3])=>[
        key2,
        value3.charAt(0).toUpperCase() + value3.slice(1)
    ])
)

// console.log(sol);

// do it by for in


// 15. Convert object to query string

const data2 ={
    name: "Alice", 
    age: 25
}

const query = Object.entries(data2).map((
    [key ,value2])=> `${key}=${value2}`).join("&")

// console.log(query);


// 16. Count even and odd numbers in array

const arr = [1,2,3,4,5,6]

const store =[]

for(let i=0;i<arr.length;i++){
    if(i%2===0){
        console.log("Even :",i);
        return i
    }
    else{
        console.log("odd: ",i);
        
    }
}

