import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

const port = process.env.Port || 3000;

app.listen(port, () => {
  console.log(`server is rumnning on port ${port}`);
});
