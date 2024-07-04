import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    patg: '/env'
})

connectDB()








// approach 1 for connecting db
// import express from "express";

// const app = express()

// (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//        app.on("error", (error) => {
//         console.log("ERROR: ", error);
//         throw error
//     })
//     app.listen(process.env.PORT, () => {
//         console.log(`app is listening on port ${process.env.PORT}`);
//     })

//     } catch(error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()