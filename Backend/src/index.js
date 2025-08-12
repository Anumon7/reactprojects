import express from "express";
import routes from "./routes.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/app/auth', routes);

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
