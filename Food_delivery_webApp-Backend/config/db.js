import mongoose from 'mongoose'

const URL = "mongodb+srv://pankajadityadev:$;foodApp715$;@cluster0.m38yl.mongodb.net/FoodDeliveryWebApp";

export const connectToDB = async ()=>{
    await mongoose.connect(URL)
    .then(()=>console.log("DB Connected!..."))
}

// export const connectToDB = ()=>{
//     return new Promise((resolve,reject)=>{
//         mongoose.connect(URL)
//         resolve();
//     })
//     .then(()=>console.log("CONNECTED!!!......"))
// }