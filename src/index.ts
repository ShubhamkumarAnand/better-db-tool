import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { getUsers } from "./modules/user";
import userRoute from "./routes/auth";

const app = new Hono();
app.use("*", logger());
app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("", userRoute);

export default app;
