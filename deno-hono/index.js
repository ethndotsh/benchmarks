import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v2.0.5/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello! Hono!"));

serve(app.fetch);
