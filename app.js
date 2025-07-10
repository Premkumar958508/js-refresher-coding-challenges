import Dog from "./math.mjs";

const dog = new Dog("Deepak","mental")
console.log(dog.bark());


// 11.
const sumAll = (numbers) => {
    let res = numbers.reduce((sum,current) => sum+current,0)
    console.log(res);
}
sumAll([1,2,3,4,5])

//12.
const obj = {id:1,firstName : "Deepak", email:"deepak@123.com"}

const {
    id : userId,
    firstName : fullName = "Guest",
    email 
} = obj
console.log(userId);
console.log(fullName);
console.log(email);

//13.
const object = { user: { name: "Premkumar", address: { street: "Main St", city: "Hometown" } } }

const {
    user : {
        name,
        address : {street,city}
    }
} = object

console.log(name);
console.log(street);
console.log(city);

//14.
const original = {a : 1, b : {c : 2}}

const copy = {...original}

copy.a = 50
copy.b.c = 500

console.log(copy.a);
console.log(original.a);
console.log(copy.b.c);
console.log(original.b.c); // affected

//15.
const fetchData = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(id % 2 == 0) {
                resolve({id:id,data:"Some data"})
            } else {
                reject("ID must be even")
            }
        },2000)
    })
}
console.log();
fetchData(2)
    .then(res => console.log("resolved",res))
    .catch(error => console.log("Rejected",error))


//16.
const fetchData1 = (id) => {
    return new Promise((resolve,reject) => {
        if(id > 0) {
            resolve({id,data : "Some data"})
        } else {
            reject("Invalid ID")
        }
    })
}
const getData = async(id) => {
    try {
        const result1 = await fetchData1(id)
        console.log("Data",result1);
    }
    catch (error) {
        console.log("Error",error);
    }
}
getData(-1);


//17.
const price = [{ item: "A", price: 10 }, { item: "B", price: 20 }, { item: "C", price: 30 }]
const result = price.reduce((accumlator,current) => accumlator+current.price,0)
console.log(result);











