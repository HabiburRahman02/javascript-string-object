const institute = 'SHERPUR Polytechnic Institue';
console.log(institute);
console.log(institute.toLowerCase());
console.log(institute.toUpperCase());


const dream = 'Developer';
const futurePlan = 'developer';

if (dream.toLowerCase() === futurePlan.toLowerCase()) {
    console.log('i will be a web developer');
}
else {
    console.log('its not impossible, i work hard')
}


const friendName = 'sadia';
const gfName = '    sadia ';

if (friendName.trim() === gfName.trim()) {
    console.log('oky i am happy');
}
else {
    console.log('i am sad because did not match')
}