import mongoose from "mongoose";
import { envVars } from "./app/config/env";
import { Server } from "http";
import app from "./app";
let server: Server;
const startServer = async () => {
  try {
    await mongoose
      .connect(envVars.DB_URL)
      .then(() => console.log("Connected to Mongodb"))
      .catch((err) => console.log(err));
    server = app.listen(envVars.PORT, () =>
      console.log(`Server is running on port ${envVars.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
})();
