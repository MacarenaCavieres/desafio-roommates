import express from "express";
import routeRoom from "./routes/roommate.route.js";
import routeGasto from "./routes/gasto.route.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routeRoom);
app.use("/api/v1", routeGasto);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
