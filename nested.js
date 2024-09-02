const college = {
    name: 'Sherpur Polytechnic',
    student: 2000,
    teacherNames: ['ahammad', 'mukul', 'dipok', 'sohag'],
    department: {
        building: 5,
        totalSit:{
           civil: 50,
           electrical: 100,
           computer: 70
        }
    }
};
console.log(college.department.totalSit)
// console.log(college.department.totalSit.computer)
// college.department.totalSit.civil = 120  //update value
college.department.totalSit['computer'] = 500;
console.log(college)


// 3 vabe acces korte pari
// . notation
// bracket notation
// 2 notation ke akta variable a rekhe diye access korte pari