import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed ", err);
})







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