import { app } from "./app.js";
import { connectDb } from "./config/db.js";
const PORT = process.env.PORT || 4000;
connectDb().then((host) => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${host} port ${PORT}`);
    });
}).catch((err) => {
    console.error(`Error connecting to the database: ${err.message}`)
})