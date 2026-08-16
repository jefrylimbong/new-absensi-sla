import { Elysia } from "elysia";
import { db } from "./db";
import { usersRoute } from "./routes/users-route";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .decorate("db", db)
  .use(usersRoute)
  .get("/", () => {
    return {
      message: "Absensi SLA API is running",
      timestamp: new Date().toISOString(),
    };
  })
  .get("/health", async () => {
    return {
      status: "ok",
      database: "connected",
    };
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
