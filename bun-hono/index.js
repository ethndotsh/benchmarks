import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.json({ message: "Hello! Hono!" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
