import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { cors } from "@tinyhttp/cors";

const app = new App();

app.use(
  logger({
    methods: ["GET", "POST"],
    timestamp: { format: "HH:mm:ss" },
    output: { callback: console.log, color: false },
  })
);
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000);
