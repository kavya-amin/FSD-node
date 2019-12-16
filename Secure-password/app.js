const bcrypt= require('bcryptjs');
const myFunction = async()=>{
let password = "kavya123";
console.log(password);
let hashedPassword= await bcrypt.hash(password,8);
console.log(hashedPassword);
const flag = await bcrypt.compare(password,hashedPassword); 
console.log(flag);
}
myFunction();