import * as express from "express";

class App {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
  }

  /**
   * listen
   */
  public listen() {
    this.app.listen(5000, () => {
      console.log("App is listening on the port 5000");
    });
  }
}

export default App;
