// task-01
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const color = colors["golden rod"];
// console.log(color)


// task-02
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car)
car['passenger capacity'] = 5
console.log(car)


// task-03
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const physicsMarks = student.physics.marks;
// console.log(physicsMarks)


// task-04
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const totalProperty = Object.keys(student2).length
// console.log(totalProperty)


// task-05
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const key in myObject) {
    const output = `key: ${key} | type: ${typeof myObject[key]}`
    console.log(output)
}

