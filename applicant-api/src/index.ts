/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "./user/user.router";


/**
 * App Variables
 */
 
 const PORT: number = 7000;
 
 const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
app.set('port', PORT);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


app.use("/", userRouter);