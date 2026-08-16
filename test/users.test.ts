import { describe, it, expect } from "bun:test";
import { app } from "../src/index";

describe("User Registration Endpoint", () => {
  const uniqueEmail = `user_${Date.now()}@nsa.sch.id`;

  it("POST /api/users - should register a new user successfully", async () => {
    const response = await app.handle(
      new Request("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: uniqueEmail,
          password: "admin123",
        }),
      })
    );

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ data: "OK" });
  });

  it("POST /api/users - should return error 400 when email is already registered", async () => {
    const response = await app.handle(
      new Request("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Another User",
          email: uniqueEmail,
          password: "admin123",
        }),
      })
    );

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: "email sudah terdaftar" });
  });
});
