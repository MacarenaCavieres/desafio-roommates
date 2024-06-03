import express from "express";
import routeRoom from "./routes/roommate.route.js";
import routeGasto from "./routes/gasto.route.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routeRoom);
app.use("/", routeGasto);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
