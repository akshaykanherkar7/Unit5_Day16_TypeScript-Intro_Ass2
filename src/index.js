var movie1 = {
    title: "Radhe",
    status: true,
    id: 1
};
console.log(movie1);
//2
var getName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "Akshay",
    last_name: "kanherkar"
};
getName(person1);
var address1 = {
    houseNumbers: 1,
    street: "AKRoad",
    city: "Pune",
    state: "Maharashtra",
    postalCode: 411006,
    country: "India"
};
console.log(address1);
var MyDetail = {
    phones: [9730423294, 9955885585],
    addresses: ["Ap-Kh,pune", "AP-Pune,Wakad"],
    email: "akshaykanherkar7@gmail.com",
    firstname: "Akshay",
    lastname: "Kanherkar",
    middlename: "Hanumant"
};
console.log(MyDetail);
