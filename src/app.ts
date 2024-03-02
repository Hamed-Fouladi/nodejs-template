import * as express from "express";
import * as dotenv from "dotenv";

dotenv.config();

class App {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.SERVER_PORT);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on the port ${this.port}`);
    });
  }
}

export default App;
