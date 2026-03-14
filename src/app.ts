import express from "express";
import userRoutes from "./routes/user.routes.js";
import articleRoutes from "./routes/article.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import ErrorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.get("/test", (req, res) => res.json({ ok: true }));
app.use("/api", userRoutes);
app.use("/api", articleRoutes);
app.use("/api", commentRoutes);

console.log("Routes registered successfully.");

app.use(ErrorMiddleware.handle);

export default app;