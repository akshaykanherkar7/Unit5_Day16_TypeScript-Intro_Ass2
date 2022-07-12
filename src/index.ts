//1 Interface Object
interface Details{
    title : string,
    status : boolean,
    id : number
}
const movie1 : Details = {
    title:"Radhe",
    status: true,
    id: 1
}
console.log(movie1)

//2
const getName = ({first_name , last_name} : person): void => {
    console.log(`${first_name}_${last_name}`);
}
interface person {
    first_name: string;
    last_name: string;
}
const person1 : person = {
    first_name: "Akshay",
    last_name: "kanherkar"
}
getName(person1);


//3
interface Address{
    houseNumbers: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string
}

const address1 : Address = {
    houseNumbers : 1,
    street: "AKRoad",
    city: "Pune",
    state: "Maharashtra",
    postalCode: 411006,
    country: "India"
}
console.log(address1);


//4
interface PersonDetails{
    // Prefix optional
    phones: number[],
    addresses : string[],
    email: string | null
    firstname: string,
    lastname: string,
    middlename : string | null
}
const MyDetail : PersonDetails={
    phones: [9730423294,9955885585],
    addresses: ["Ap-Kh,pune", "AP-Pune,Wakad"],
    email: "akshaykanherkar7@gmail.com",
    firstname: "Akshay",
    lastname: "Kanherkar",
    middlename: "Hanumant"
}
console.log(MyDetail)