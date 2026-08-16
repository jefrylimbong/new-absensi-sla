import { Elysia } from "elysia";
import { db } from "./db";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .decorate("db", db)
  .get("/", () => {
    return {
      message: "Absensi SLA API is running",
      timestamp: new Date().toISOString(),
    };
  })
  .get("/health", async ({ db }) => {
    return {
      status: "ok",
      database: "connected",
    };
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
