const phone ={
    brand: 'Real me',
    price: 12000,
    camera: '14px',
    color: 'Aqua'
}

// array: for of 
// object: for in
for(const key in phone){
    console.log(key);
    console.log(phone[key])
}