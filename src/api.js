import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cors from "cors"
const app = express();
import devprivate from "./routes/private.routes.js";
import test from "./routes/test.routes.js";
import client from "./routes/client.routes.js";

/*
import login from "./routes/login.routes.js";
import news from "./routes/news.routes.js";
import media from "./routes/media.routes.js";
import structure from "./routes/structure.routes.js";
import userapp from "./routes/userapp.routes.js";
*/

// Middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(morgan('combined'));

// Routes
app.use("/private", devprivate);
app.use("/test", test);
app.use("/client", client);
/*
app.use("/login", login);
app.use("/structure", structure);
app.use("/media", media);
app.use("/news", news);
app.use("/userapp", userapp);
*/
app.use((req, res, next) => {
    res.status(404).json({ message: "ruta no encontrada" });
});


//inicia servidor
app.set('port', process.env.PORT || 9876);
app.listen(app.get('port'),()=>{
    console.log('servidor corriendo en el puerto',app.get('port'));
});